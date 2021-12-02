import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Search } from 'src/components/search/index';
import { Compass, HeartEmpty, Logo, User } from 'src/components/ui/elements/icons';
import { useInput } from 'src/hooks/useInput';
import { ME } from 'src/SharedQueries';
import styled from 'styled-components';

import { useQuery } from '@apollo/client';

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
            <Search
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
