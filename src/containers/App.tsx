import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { isLoggedInVar } from 'src/apollo/Client';
import Footer from 'src/components/Footer';
import { Header } from 'src/components/Header';
import Routes from 'src/components/Routes';
import GlobalStyles from 'src/styles/GlobalStyles';
import Theme from 'src/styles/Theme';
import styled, { ThemeProvider } from 'styled-components';

import { gql, useReactiveVar } from '@apollo/client';

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
