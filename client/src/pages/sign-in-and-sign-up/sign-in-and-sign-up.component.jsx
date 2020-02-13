import React from 'react';

import { SignIn, SignUp } from '../../components';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

export const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);
