import React from 'react';
import { Helmet } from 'react-helmet';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import styled from 'styled-components';

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

interface FormField {
  value: string;
   onChange: Function, setValue: Function
}

export interface Props { username: FormField, password: FormField, firstName: FormField, lastName: FormField, email: FormField, onSubmit: any }

export const RegistrationForm: React.FC<Props>  = (props) => {
  const { firstName,
  lastName,
  email,
  username,
  password, onSubmit} = props;

  return <Wrapper>
    <Form>
        <>
          <Helmet>
            <title>Sign Up | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={"First name"} {...firstName} />
            <Input placeholder={"Last name"} {...lastName} />
            <Input placeholder={"Email"} {...email} type='email' />
            <Input placeholder={"Username"} {...username} />
            <Input placeholder={"Password"} {...password} type='password' />
            <Button text={"Sign up"} />
          </form>
        </>
        <StateChanger>
       

       <>
         Have an account? <Link onClick={() => "logIn"}>Log in</Link>
       </>
     
   </StateChanger>
    </Form>
  </Wrapper>
};
