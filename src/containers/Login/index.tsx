import React from 'react';
import { toast } from 'react-toastify';
import { logUserIn } from 'src/apollo/Client';
import { useInput } from 'src/hooks/useInput';

import { useMutation } from '@apollo/client';

import { LOG_IN } from './gql';
import { AuthPresenter } from './LoginForm';

export const LoginContainer = () => {
  const password = useInput<string>("");
  const email = useInput<string>("");
  const [loginMutation] = useMutation<{login: string}>(LOG_IN);


  const onSubmit = async (e) => {
    e.preventDefault();
      if (email.value !== "") {
        try {
          const {
            data: {login},
          } = await loginMutation({
            variables: { email: email.value, password: password.value },
          });
          
          if (!login) {
            toast.error("You dont have account yet, create one");
            } else {
            logUserIn(login)
            toast.success("Check your inbox for your login secret");
          }
        } catch (e) {
           toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
  };

  return (
    <AuthPresenter
      email={email}
      password={password}
      onSubmit={onSubmit}
    />
  );
};
