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
