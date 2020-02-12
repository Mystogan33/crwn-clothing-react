import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import {
  SignUpContainer,
  SignUpTitle,
  SignUpForm
} from './sign-up.styles';


export const SignUpComponent = props => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword]= useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = props;

    if(password !== confirmPassword) {
      alert("Password don't match !");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <SignUpContainer>
      <SignUpTitle className="title">I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <SignUpForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
          label='Display Name'
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label='Email'
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label='Password'
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          label='Confirm Password'
        />
      <CustomButton type="submit">SIGN UP</CustomButton>
      </SignUpForm>
    </SignUpContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export const SignUp = connect(null, mapDispatchToProps)(SignUpComponent);
