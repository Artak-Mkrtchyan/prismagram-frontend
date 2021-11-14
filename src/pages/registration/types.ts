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

export interface FormField {
  value: string;
  onChange: Function;
  setValue: Function;
}

export interface Props {
  username: FormField;
  password: FormField;
  firstName: FormField;
  lastName: FormField;
  email: FormField;
  onSubmit: any;
}
