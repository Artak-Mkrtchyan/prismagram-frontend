import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { isLoggedInVar } from 'src/apollo/Client';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';
import Routes from 'src/components/Routes';
import GlobalStyles from 'src/styles/global-styles';
import { theme } from 'src/styles/theme';
import styled, { ThemeProvider } from 'styled-components';

import { useReactiveVar } from '@apollo/client';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
`;

export const App: React.FC = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
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
