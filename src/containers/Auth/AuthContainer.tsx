import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useInput } from 'src/hooks/useInput';

import { useMutation } from '@apollo/client';

import { AuthPresenter } from './AuthPresenter';
import { CONFIRM_SECRET, CREATE_ACCOUNT, LOCAL_LOG_IN, LOG_IN } from './AuthQueries';

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

export const Auth = () => {
  const [action, setAction] = useState("logIn");
  const username = useInput<string>("");
  const password = useInput<string>("");
  const firstName = useInput<string>("");
  const lastName = useInput<string>("");
  const secret = useInput("");
  const email = useInput<string>("");
  const [requestSecretMutation] = useMutation<{requestSecret: () => {}}>(LOG_IN);
  const [createAccountMutation, { error, data: createAccountData }] = useMutation<CreateAccountMutationData, NewUserDetails>(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    },
  });
  const [confirmSecretMutation] = useMutation<{confirmSecret: any}>(CONFIRM_SECRET);
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation({
            variables: { email: email.value },
          });
          if (!requestSecret) {
            toast.error("You dont have account yet, create one");
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
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
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All fields are required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token },
          } = await confirmSecretMutation({
            variables: {
              email: email.value,
              secret: secret.value,
            },
          });

          if (token !== "" || token !== undefined) {
            localLogInMutation({
              variables: {
                token,
              },
            });
          } else {
            throw Error();
          }
        } catch (e) {
          toast.error("Cant confirm secret, check again");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      secret={secret}
      lastName={lastName}
      password={password}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
