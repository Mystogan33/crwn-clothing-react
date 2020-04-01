import React, { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import {
  SignUpContainer,
  SignUpTitle,
  SignUpForm
} from './sign-up.styles';
import { Dispatch } from 'redux';
import { SignUpCredentials } from '../../interfaces/interfaces';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpStart: (userCredentials: SignUpCredentials) => dispatch(signUpStart(userCredentials))
});

const connector = connect(null, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type SignUpProps = ReduxProps;

export const SignUpComponent = ({ signUpStart }: SignUpProps) => {

  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
          handleChange={handleChange}
          label='Display Name'
          autoComplete="on"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label='Email'
          autoComplete="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label='Password'
          autoComplete="new-password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          autoComplete="off"
        />
      <CustomButton type="submit">SIGN UP</CustomButton>
      </SignUpForm>
    </SignUpContainer>
  )
};

export const SignUp = connector(SignUpComponent);
