import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import * as Pallete from "./colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0px;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${Pallete.primaryColor}
  }
  body, input, button, textarea {
    font: 18px 'Source Sans Pro', sans-serif;
    color: ${Pallete.textColor}
  }

  input:focus, textarea:focus {
    background: ${Pallete.backgroundInputFocused};
    transition: 0.2s linear all;
  }

  input::placeholder, textarea::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${Pallete.placeholderColor};
      opacity: 1; /* Firefox */
    }

  input::-ms-input-placeholder, textarea::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${Pallete.placeholderColor};
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    padding: 14px 26px 13px;
    border-radius: 5px;
    border: 0;
  }

  h1 {
    letter-spacing: 0.84px;
    font-size: 42px;
  }

  h4 {
    letter-spacing: 0.52px;
    font-size: 26px;
  }

  h5 {
    letter-spacing: 0.48px;
    font-size: 24px;
  }
`;
