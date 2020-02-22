import React, { useEffect } from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { Header } from './components';

import {
  HomePage,
  ShopPage,
  SignInAndSignUpPage,
  CheckoutPage
} from './pages';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
      <div className="content-container">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signIn' render={
            () => currentUser ?
              (
                <Redirect to='/' />
              ) :
              (
                <SignInAndSignUpPage />
              )
            } />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
