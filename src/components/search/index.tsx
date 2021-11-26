import { useState } from 'react';
import styled from 'styled-components';

export interface Props {
  value: string;
  onChange: Function;
  placeholder: string;
}

const Input = styled.input`
  border: 1px solid #dbdbdb;
  color: #262626;
  outline: 0;
  border-radius: 4px;
  background-color: #fafafa;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 14px;
  height: 28px;
  padding: 0 12px;

  &::placeholder {
    opacity: 0.8;
    font-weight: 400;
  }
`;

const Container = styled.div`
  display: flex;
  width: 215px;
  min-width: 125px;
  position: relative;
  align-items: center;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fafafa;
  height: 28px;
  width: 215px;
  min-width: 125px;
`;

const Text = styled.span`
  display: inline-block;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  font-size: 14px;
  color: #8e8e8e;
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

const CloseIcon = styled.span`
  position: absolute;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  right: 5px;
  display: inline-block;
  vertical-align: baseline;
  background-size: 440px 411px;
  background-position: -380px -96px;
  background-image: url(./bcd90c1d4868.png);
`;

const PopupCorner = styled.div`
  position: absolute;
  height: 14px;
  width: 14px;
  transform: rotate(45deg);
  background: #fff;
  border: 1px solid #fff;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  left: 187.5px;
  top: -6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 275px;
`;

const Popup = styled.div`
  display: flex;
  position: relative;
  width: 375px;
  top: 12px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
`;

const PopupContent = styled.div`
  display: flex;
  position: absolute;
  height: 362px;
  width: 375px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 0 0 0;
  background: white;
  border-radius: 6px;
`;

const PopupBody = styled.div`
  position: absolute;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  border: 1px solid #fff;
  border-radius: 6px;
  height: 362px;
  width: 375px;
`;

export const Search: React.FC<Props> = (props: Props) => {
  const [touched, setStatus] = useState<boolean>(false);

  return (
    <Wrapper>
      <Container>
        {touched ? (
          <>
            <Input autoFocus placeholder="Search" />
            <CloseIcon onClick={() => setStatus(false)} />
          </>
        ) : (
          <SearchButton onClick={() => setStatus(true)}>
            <SearchIcon />
            <Text>Search</Text>
          </SearchButton>
        )}
      </Container>
      {touched ? (
        <Popup>
          <PopupBody>
            <PopupCorner />
            <PopupContent />
          </PopupBody>
        </Popup>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};
