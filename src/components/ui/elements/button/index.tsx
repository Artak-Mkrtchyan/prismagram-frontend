import { Props } from './types';

export const Button = (props: Props) => {
  return (
    <button onClick={() => props.onClick()} className={props.className}>
      {props.children}
      {props.value}
    </button>
  );
};
