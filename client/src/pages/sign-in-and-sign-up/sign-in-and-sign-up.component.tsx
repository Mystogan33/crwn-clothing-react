import React from 'react';

import { SignIn, SignUp } from '../../components';
import { useAppSelector } from '../../redux/hooks';
import { selectError } from '../../redux/user/user.selectors';

import { ErrorDialog, SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

export const SignInAndSignUpPage = () => {
  const errorMessage = useAppSelector(selectError);

  return (
    <SignInAndSignUpContainer>
      { errorMessage && <ErrorDialog>{errorMessage}</ErrorDialog> }
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
};

export default SignInAndSignUpPage;
