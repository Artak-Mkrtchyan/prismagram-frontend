import { gql, useMutation } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $password: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(
      username: $username
      password: $password
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;

export interface CreateAccountVars {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface CreateAccountData {
  createAccount: CreateAccountVars;
}

export const useCreateUser = ({
  email,
  username,
  firstName,
  lastName,
  password,
}) => {
  const [createAccountMutation, { data: createAccountData }] = useMutation<
    CreateAccountData,
    CreateAccountVars
  >(CREATE_ACCOUNT, {
    variables: {
      email: email,
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
    },
  });

  return { createAccountMutation, createAccountData };
};
