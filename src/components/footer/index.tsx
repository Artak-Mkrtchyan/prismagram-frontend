import styled from 'styled-components';

import { Props } from './types';

const FooterElement = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.a`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.darkBlue};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.colors.darkGray};
`;

export const Footer = (props: Props) => (
  <FooterElement>
    <List>
      <ListItem>
        <Link href="#">about us</Link>
      </ListItem>

      <ListItem>
        <Link href="#">support</Link>
      </ListItem>

      <ListItem>
        <Link href="#">press</Link>
      </ListItem>

      <ListItem>
        <Link href="#">api</Link>
      </ListItem>

      <ListItem>
        <Link href="#">jobs</Link>
      </ListItem>

      <ListItem>
        <Link href="#">privacy</Link>
      </ListItem>

      <ListItem>
        <Link href="#">terms</Link>
      </ListItem>

      <ListItem>
        <Link href="#">directory</Link>
      </ListItem>

      <ListItem>
        <Link href="#">profiles</Link>
      </ListItem>

      <ListItem>
        <Link href="#">hashtags</Link>
      </ListItem>

      <ListItem>
        <Link href="#">language</Link>
      </ListItem>
    </List>

    <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
  </FooterElement>
);
