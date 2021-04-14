import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

import { Header, Spinner, ErrorBoundary } from './components';
import { Dispatch } from 'redux';
import { User } from './interfaces/interfaces';
import { RootState } from './redux/root-reducer';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const mapStateToProps = createStructuredSelector<RootState, { currentUser: User | null }>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type AppProps = ReduxProps;

const App = ({ checkUserSession, currentUser }: AppProps) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const renderedSignIn = () => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />;

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="content-container">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signIn' render={renderedSignIn} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </div>
  );
};

export default connector(App);
