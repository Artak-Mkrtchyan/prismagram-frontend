import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../Styles/GlobalStyles";
import Router from "./Router";
import Theme from "../Styles/Theme";

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Router isLoggedIn={false} />
  </ThemeProvider>
);
