import { Link } from 'react-router-dom';
import { Avatar } from 'src/components/avatar';
import { SIZE } from 'src/components/avatar/types';
import { FatText } from 'src/components/fat-text';
import FollowBottom from 'src/components/follow-button';
import styled from 'styled-components';

import { Props } from './types';

const Card = styled.div`
  ${(props) => props.theme.whiteBox}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

export const UserCard = ({ id, username, isFollowing, url, isSelf }: Props) => (
  <Card>
    <EAvatar url={url} size={SIZE.LARGE} />
    <ELink to={`/${username}`}>
      <FatText text={username} />
    </ELink>
    {!isSelf && <FollowBottom id={id} isFollowing={isFollowing} />}
  </Card>
);
