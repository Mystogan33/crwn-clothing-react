import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { Header } from './components';
import { HomePage, ShopPage, SignInAndSignUpPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

const pages = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    exact: true,
    path: '/shop',
    component: ShopPage
  },
  {
    exact: true,
    path: '/signIn',
    component: SignInAndSignUpPage
  }
];

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
      else setCurrentUser(userAuth);
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
          {
            pages.map(({...props}, index) =>
              <Route key={index} {...props} />
            )
          }
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
