import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
    background: #f8f8f8;
  }

  p {
    line-height: 1.5;
  }
`;

export { GlobalStyle };
