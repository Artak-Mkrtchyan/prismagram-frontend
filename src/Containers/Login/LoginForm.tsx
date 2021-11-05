import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;

  form {
    width: 100%;

    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }

    button {
      margin-top: 10px;
    }
  }
`;

export const AuthPresenter = ({  email, password, onSubmit }) => (
  <Wrapper>
    <Form>
        <>
          <Helmet>
            <title>Log In | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"Email"} {...email} type='email' />
            <Input placeholder={"Password"} {...password} type='password' />
            <Button text={"Log in"} />
          </form>
        </>
    </Form>
      <StateChanger>
          <>
            Don't have an account? <Link onClick={() => "signUp"}>Sign Up</Link>
          </>
      </StateChanger>
  </Wrapper>
);
