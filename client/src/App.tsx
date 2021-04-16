import React, { useEffect, lazy, Suspense, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selectors';
import { useAppDispatch, useAppSelector } from './redux/hooks';

import { GlobalStyle } from './global.styles';

import { Header, Spinner, ErrorBoundary } from './components';
import { checkUserSession } from './redux/user/userSlice';

// COMPONENTS PAGE
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const isUserAuthenticated = () => dispatch(checkUserSession());

  console.log(currentUser);

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
              <Route exact path='/signIn' render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </div>
  );
};

export default App;
