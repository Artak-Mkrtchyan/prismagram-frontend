import React, { useState } from 'react';
import { Button } from 'src/components/ui/elements/button';
import { CloseCircleIcon, SearchIcon } from 'src/components/ui/elements/icons';
import styled from 'styled-components';

import { SearchList } from './search-list';
import * as Styled from './styled';
import { Props } from './types';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 16px 0;
  max-height: 24px;
`;

export const ClearButton = styled(Button)`
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
            <CloseCircleIcon onClick={() => setStatus(false)} />
          </>
        ) : (
          <Styled.SearchButton value="Search" onClick={() => setStatus(true)}>
            <SearchIcon />
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
                  <ClearButton value="Clear All" onClick={() => {}} />
                </Header>
                <SearchList />
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
