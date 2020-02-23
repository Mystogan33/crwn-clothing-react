import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: white;
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 0;

     .content-container {
       padding: 0 40px;
     }

    @media screen and (max-width: 800px) {
      padding: 10px 0;

      .content-container {
        padding: 0 20px;
      }
    }

    a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;
