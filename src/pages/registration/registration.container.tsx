import { toast } from 'react-toastify';
import { useInput } from 'src/hooks/useInput';

import { useMutation } from '@apollo/client';

import { CREATE_ACCOUNT } from './queries';
import { RegistrationPresenter } from './registration.presenter';
import { CreateAccountData, CreateAccountVars } from './types';

export const RegistrationContainer = () => {
  const username = useInput('');
  const password = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');

  const [createAccountMutation, { data: createAccountData }] = useMutation<
    CreateAccountData,
    CreateAccountVars
  >(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      email.value !== '' &&
      username.value !== '' &&
      firstName.value !== '' &&
      lastName.value !== ''
    ) {
      try {
        await createAccountMutation();
        if (!createAccountData.createAccount) {
          toast.error("Can't create account");
        } else {
          toast.success('Account created! Log In now');
        }
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      toast.error('All fields are required');
    }
  };

  return (
    <RegistrationPresenter
      username={username}
      firstName={firstName}
      lastName={lastName}
      password={password}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
