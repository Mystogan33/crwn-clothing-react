import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: unset;
		align-items: center;
		text-align: center;

		> *:first-child {
			margin-bottom: 50px;
		}
	}
`;

export const ErrorDialog = styled.div`
	position: fixed;
	padding: 10px;
	font-weight: bold;
	background-color: black;
	color: white;
	text-align: center;
	top: 0;
	left: 0;
	right: 0;
	max-width: 100%;
	border-radius: 0px;
`;
