import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import styled, { ThemeProvider } from 'styled-components';

import { gql, useReactiveVar } from '@apollo/client';

import { isLoggedInVar } from '../Apollo/Client';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Footer from './Footer';
import Header from './Header';
import Routes from './Routes';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export const App = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router >
            {isLoggedIn && <Header />}
            <Wrapper>
              <Routes isLoggedIn={isLoggedIn} />
              <Footer />
            </Wrapper>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};
