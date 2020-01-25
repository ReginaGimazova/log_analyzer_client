import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
  }
  
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: bold;
  }
  
  p {
    margin: 0;
    font-size: .875rem;
    line-height: 1.5;
  }
  
  a, button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    transition: all .25s ease-in-out 0s;
    outline: none;
    color: ${({ theme }) => theme.colors.black};
  }
  
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: 0;
    text-transform: uppercase;
   
    &:disabled {
      cursor: default;
    }
  }
  
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
