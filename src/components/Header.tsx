import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { useInput } from 'src/hooks/useInput';
import { ME } from 'src/SharedQueries';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

import { Compass, HeartEmpty, Logo, User } from './Icons';
import Input from './Input';

const HeaderElement = styled.header`
  width: 100%;
  border-radius: 0px;
  border: 0px;
  border-bottom: ${(props) => props.theme.boxBorder};
  margin-bottom: 60px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.colors.bg};
  padding: 5px;
  font-size: 14px;
  height: auto;
  border-radius: 3px;
  text-align: center;
  width: 70%;

  &::placeholder {
    opacity: 0.8;
    font-weight: 400;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const Header = withRouter(({ history }) => {
  const search = useInput('');
  const { data } = useQuery(ME);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };

  return (
    <HeaderElement>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="Search"
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {!data?.me ? (
            <HeaderLink to="#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={`/user/${data.me.username}`}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </HeaderElement>
  );
});
