import React, { useState, ChangeEvent, FormEvent } from "react";

import { useAppDispatch } from "../../redux/hooks";
import { signUpStart } from "../../redux/user/userSlice";

// Components
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitle, SignUpForm } from "./sign-up.styles";

export const SignUp = () => {
	const dispatch = useAppDispatch();

	const [userCredentials, setCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>) =>
		setCredentials({ ...userCredentials, [name]: value });

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Password don't match !");
			return;
		}

		dispatch(signUpStart({ displayName, email, password }));
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
					label="Display Name"
					autoComplete="on"
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					autoComplete="email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					autoComplete="new-password"
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					handleChange={handleChange}
					label="Confirm Password"
					autoComplete="off"
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</SignUpForm>
		</SignUpContainer>
	);
};
