import React, { useState } from 'react';
import { connect } from 'react-redux';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  SignInForm
} from './sign-in.styles';

export const SignInComponent = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = props;
    emailSignInStart(email, password);
  };

  const { googleSignInStart } = props;
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <SignInForm onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={event => setEmail(event.target.value)}
          value={email}
          label="Email"
          required />
        <FormInput
          name="password"
          type="password"
          handleChange={event => setPassword(event.target.value)}
          value={password}
          label="Password"
          required />

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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
