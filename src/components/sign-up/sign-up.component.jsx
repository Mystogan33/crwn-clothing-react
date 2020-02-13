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

export const SignUpComponent = ({ signUpStart }) => {

  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value});
  };

  const handleSubmit = async event => {
    event.preventDefault();

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
          onChange={handleChange}
          label='Display Name'
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label='Email'
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label='Password'
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
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
