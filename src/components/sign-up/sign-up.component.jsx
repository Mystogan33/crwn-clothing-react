import React from 'react';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import {
  SignUpContainer,
  SignUpTitle,
  SignUpForm
} from './sign-up.styles';

export class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword) {
      alert("Password don't match !");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle className="title">I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <SignUpForm onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label='Password'
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
          />
        <CustomButton type="submit">SIGN UP</CustomButton>
        </SignUpForm>
      </SignUpContainer>
    )
  }
}
