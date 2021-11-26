import React from 'react';
import styled from 'styled-components';

import { Props } from './types';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bg};
  height: 28px;
  width: 215px;
  min-width: 125px;
  padding: 0 12px;
`;

const TextInput = styled.input`
  border: 0px;
  text-align: left;
  width: 100%;
  height: 35px;
  font-size: 12px;
  padding: 0px;
`;

const Text = styled.span`
  display: inline-block;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
`;

const SearchIcon = styled.span`
  background-repeat: no-repeat;
  height: 10px;
  display: inline-block;
  margin-right: 6px;
  vertical-align: baseline;
  width: 10px;
  background-size: 440px 411px;
  background-position: -428px -241px;
  background-image: url(./bcd90c1d4868.png);
`;

const Input: React.FC<Props> = ({
  placeholder,
  required = true,
  value,
  onChange,
  className,
}) => (
  <Container>
    {/* <>
      <SearchIcon />
      <Text>Search</Text>
    </> */}

    <TextInput
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={() => onChange}
      type="text"
    />
  </Container>
);

export const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.colors.bg};
  padding: 0px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  text-align: left;
  width: 100%;

  &::placeholder {
    opacity: 0.8;
    font-weight: 400;
  }
`;
