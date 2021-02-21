import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
      --light: #517ee7;
      --dark: #225add;
    }
  
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Roboto", sans-serif;
      font-size: 10px;
    }
  
    button {
      background: none;
      border: none;
      outline: none;
    }

    select {
      -webkit-appearance: none;
    }
  `;

function GlobalStyles() {
  return <GlobalStyle />;
}

export default GlobalStyles;
