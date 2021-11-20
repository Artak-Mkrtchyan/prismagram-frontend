import { FormEventHandler } from 'react';

export interface Props {
  email: any;
  password: any;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
