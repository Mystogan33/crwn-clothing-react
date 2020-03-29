import React, { useState, ChangeEvent, FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  SignInForm
} from './sign-in.styles';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({ email, password }))
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type ISignInProps = PropsFromRedux;

export const SignInComponent: FC<ISignInProps> = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setCredentials] = useState({email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value});
  }

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

export const SignIn = connector(SignInComponent);
