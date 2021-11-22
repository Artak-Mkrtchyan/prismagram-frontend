import { Helmet } from 'react-helmet';
import { Button } from 'src/components/button';
import { Input } from 'src/components/input';

import { Form, Link, StateChanger, Wrapper } from './login.styles';
import { Props } from './types';

export const LoginPresenter: React.FC<Props> = (props: Props) => {
  const { email, password, onSubmit } = props;

  return (
    <Wrapper>
      <Form>
        <>
          <Helmet>
            <title>Log In | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input placeholder={'Email'} {...email} type="email" />
            <Input placeholder={'Password'} {...password} type="password" />
            <Button text={'Log in'} />
          </form>
        </>
      </Form>
      <StateChanger>
        <>
          Don't have an account? <Link onClick={() => 'signUp'}>Sign Up</Link>
        </>
      </StateChanger>
    </Wrapper>
  );
};
