import React, { useState } from 'react';
import { CloseIcon, SearchIcon, User } from 'src/components/ui/elements/icons';
import styled from 'styled-components';

import * as Styled from './styled';
import { Props } from './types';

export const Div = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  justify-content: space-between;

  &:hover {
    background-color: #fafafa;
  }
`;

export const CircleWrapper = styled.div`
  border: 2px solid red;
  border-radius: 50%;
  padding: 3px;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: antiquewhite;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 16px 0;
  max-height: 24px;
`;

export const List = styled.div`
  margin: 8px 0;
`;

export const Button = styled.button`
  border: 0;
  color: #0095f6;
  display: inline;
  padding: 0;
  position: relative;
  background: 0 0;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 14px;
  line-height: 18px;
`;

export const Dialog = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const ListItem: React.FC = () => (
  <Div>
    <CircleWrapper>
      <Circle>
        <User />
      </Circle>
    </CircleWrapper>
    <Text>
      <div>Name</div>
      <div>Description</div>
    </Text>
    <div>
      <svg
        aria-label="Закрыть"
        color="#8e8e8e"
        fill="#8e8e8e"
        height="16"
        role="img"
        viewBox="0 0 48 48"
        width="16"
      >
        <path
          clip-rule="evenodd"
          d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  </Div>
);

export const Search: React.FC<Props> = (props: Props) => {
  const [touched, setStatus] = useState<boolean>(false);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        {touched ? (
          <>
            <Styled.SearchInput
              value=""
              onChange={() => {}}
              placeholder="Search"
            />
            <CloseIcon onClick={() => setStatus(false)} />
          </>
        ) : (
          <Styled.SearchButton onClick={() => setStatus(true)}>
            <SearchIcon />
            <Styled.Text>Search</Styled.Text>
          </Styled.SearchButton>
        )}
      </Styled.Container>
      {touched ? (
        <>
          <Dialog onClick={() => setStatus(false)} />
          <Styled.Popup>
            <Styled.PopupBody>
              <Styled.PopupCorner />
              <Styled.PopupContent>
                <Header>
                  <h4>Recent</h4>
                  <Button>Clear All</Button>
                </Header>
                <List>
                  {Array.from(Array(10).keys()).map(() => (
                    <ListItem />
                  ))}
                </List>
              </Styled.PopupContent>
            </Styled.PopupBody>
          </Styled.Popup>
        </>
      ) : (
        <></>
      )}
    </Styled.Wrapper>
  );
};
