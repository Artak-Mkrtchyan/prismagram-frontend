import { FormEventHandler } from 'react';

export interface LogInData {
  login: string;
}

export interface LogInVars {
  email: string;
  password: string;
}

export interface Props {
  email: any;
  password: any;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
