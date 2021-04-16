import React, { useState, ChangeEvent, FormEvent } from "react";

import { SignInCredentials } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../redux/hooks";
import {
	emailSignInStart,
	googleSignInStart,
} from "../../redux/user/userSlice";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
	SignInForm,
} from "./sign-in.styles";

export const SignIn = () => {
	const dispatch = useAppDispatch();
	const startGoogleSignIn = () => dispatch(googleSignInStart());
	const startEmailSignIn = (credientials: SignInCredentials) =>
		dispatch(emailSignInStart(credientials));

	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({
		target: { value, name },
	}: ChangeEvent<HTMLInputElement>) =>
		setCredentials({ ...userCredentials, [name]: value });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		startEmailSignIn(userCredentials);
	};

	const { email, password } = userCredentials;

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
					autoComplete="email"
				/>
				<FormInput
					name="password"
					type="password"
					handleChange={handleChange}
					value={password}
					label="Password"
					required
					autoComplete="current-password"
				/>

				<ButtonsBarContainer>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={startGoogleSignIn}
						isGoogleSignIn
					>
						Sign In with Google
					</CustomButton>
				</ButtonsBarContainer>
			</SignInForm>
		</SignInContainer>
	);
};