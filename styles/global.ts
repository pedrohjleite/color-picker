import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    color: #fafafa;
    background: #191622;
    -webkit-font-smoothing: antialiased;
    font-family: 'Ubuntu', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
