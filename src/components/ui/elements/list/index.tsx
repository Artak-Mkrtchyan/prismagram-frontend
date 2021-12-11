import { Props } from './types';

export const List = ({ data, renderItem }: Props) => {
  return <>{data.map((item) => renderItem(item))}</>;
};
