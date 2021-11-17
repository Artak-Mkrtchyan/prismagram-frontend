import { toast } from 'react-toastify';
import { logUserIn } from 'src/apollo/Client';
import { useInput } from 'src/hooks/useInput';
import { useLogin } from 'src/hooks/useLogin';

import { LoginPresenter } from './login.presenter';

export const LoginContainer = () => {
  const password = useInput('');
  const email = useInput('');
  const { loginMutation } = useLogin(email.value, password.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.value !== '') {
      try {
        const {
          data: { login },
        } = await loginMutation();

        if (!login) {
          toast.error('You dont have account yet, create one');
        } else {
          logUserIn(login);
          toast.success('Check your inbox for your login secret');
        }
      } catch (e) {
        toast.error("Can't request secret, try again");
      }
    } else {
      toast.error('Email is required');
    }
  };

  return (
    <LoginPresenter email={email} password={password} onSubmit={onSubmit} />
  );
};
