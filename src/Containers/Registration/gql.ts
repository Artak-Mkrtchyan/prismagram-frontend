import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $password: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(username: $username, password: $password, email: $email, firstName: $firstName, lastName: $lastName)
  }
`;
