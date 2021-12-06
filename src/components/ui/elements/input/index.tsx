import React from 'react';
import styled from 'styled-components';

import { Props } from './types';

const Container = styled.input`
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bg};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

export const Input: React.FC<Props> = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = 'text',
  className,
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={() => onChange}
    type={type}
  />
);
