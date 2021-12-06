import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'src/components/button';
import { Input } from 'src/components/ui/elements/input';

import { Form, Link, StateChanger, Wrapper } from './registration.styles';
import { Props } from './types';

export const RegistrationPresenter: React.FC<Props> = (props: Props) => {
  const { firstName, lastName, email, username, password, onSubmit } = props;

  return (
    <Wrapper>
      <Form>
        <>
          <Helmet>
            <title>Sign Up | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={'First name'} {...firstName} />
            <Input placeholder={'Last name'} {...lastName} />
            <Input placeholder={'Email'} {...email} type="email" />
            <Input placeholder={'Username'} {...username} />
            <Input placeholder={'Password'} {...password} type="password" />
            <Button text={'Sign up'} />
          </form>
        </>
        <StateChanger>
          <>
            Have an account? <Link onClick={() => 'logIn'}>Log in</Link>
          </>
        </StateChanger>
      </Form>
    </Wrapper>
  );
};
