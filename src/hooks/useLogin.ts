import { gql, useMutation } from '@apollo/client';

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export interface LogInData {
  login: string;
}

export interface LogInVars {
  email: string;
  password: string;
}
export const useLogin = (email: string, password: string) => {
  const [loginMutation] = useMutation<LogInData, LogInVars>(LOG_IN, {
    variables: { email, password },
  });

  return { loginMutation };
};
