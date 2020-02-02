import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { Header } from './components';
import {
  HomePage,
  ShopPage,
  SignInAndSignUpPage,
  CheckoutPage
} from './pages';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <div className="content-container">
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signIn' render={() => this.props.currentUser ?
              (
                <Redirect to='/' />
              ) :
              (
                <SignInAndSignUpPage />
              )
            } />
          </div>
        </Switch>
      </div>
    );
  }
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
