import styled, { css } from 'styled-components';

const defaultProperties = css`
  transition: background-color .3s ease-in-out, color .3s ease-in-out;
  border-radius: 0.2rem;
`;

const defaultButtonStyles = css`
  background-color: black;
  color: white;
  ${defaultProperties}

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  ${defaultProperties}

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  ${defaultProperties}

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = ({isGoogleSignIn, inverted}) => {
  if(isGoogleSignIn) return googleSignInStyles;
  return inverted ? invertedButtonStyles : defaultButtonStyles;
};


const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

export {
  defaultButtonStyles,
  invertedButtonStyles,
  googleSignInStyles,
  CustomButtonContainer
};
