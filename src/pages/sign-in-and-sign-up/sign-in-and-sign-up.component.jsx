import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import { SignIn, SignUp } from '../../components';


export const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
