import styled from 'styled-components';

import { Props } from './types';

const Text = styled.span`
  font-weight: 600;
`;

export const FatText: React.FC<Props> = ({ text, className = '' }: Props) => (
  <Text className={className}>{text}</Text>
);
