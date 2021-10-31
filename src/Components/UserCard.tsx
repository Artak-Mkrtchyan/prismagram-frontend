import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from './Avatar';
import FatText from './FatText';
import FollowBottom from './FollowButton';

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

const UserCard = ({ id, username, isFollowing, url, isSelf }) => (
  <Card>
    <EAvatar url={url} size={"md"} />
    <ELink to={`/${username}`}>
      <FatText text={username} />
    </ELink>
    {!isSelf && <FollowBottom id={id} isFollowing={isFollowing} />}
  </Card>
);

export default UserCard;