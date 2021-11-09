import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useInput } from 'src/hooks/useInput';

import { useMutation } from '@apollo/client';

import { CREATE_ACCOUNT } from './gql';
import { RegistrationForm } from './RegistrationForm';

export interface NewUserDetails {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface CreateAccountMutationData {
  createAccount: NewUserDetails;
}

export const RegistrationContainer = () => {
  const username = useInput<string>("");
  const password = useInput<string>("");
  const firstName = useInput<string>("");
  const lastName = useInput<string>("");
  const email = useInput<string>("");
  
  const [createAccountMutation, { error, data: createAccountData }] = useMutation<CreateAccountMutationData, NewUserDetails>(CREATE_ACCOUNT, {
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
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          await createAccountMutation();
          if (!createAccountData.createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log In now");
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All fields are required");
      }

  };

  return (
    <RegistrationForm
      username={username}
      firstName={firstName}
      lastName={lastName}
      password={password}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
