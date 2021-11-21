import styled from 'styled-components';

import { Props } from './types';

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
`;

export const Button = ({ text, onClick = () => {} }: Props) => (
  <Container onClick={onClick}>{text}</Container>
);
