import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  SignInForm
} from './sign-in.styles';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({ email, password }))
});

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type SignInProps = ReduxProps;

export const SignInComponent = ({ emailSignInStart, googleSignInStart }: SignInProps) => {

  const [userCredentials, setCredentials] = useState({email: '', password: ''});
  const { email, password } = userCredentials;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <SignInForm onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
          autoComplete="email" />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
          autoComplete="current-password" />

        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </SignInForm>
    </SignInContainer>
  );
};

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
