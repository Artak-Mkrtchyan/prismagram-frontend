import React, { useState } from 'react';
import { useMutation } from 'react-apollo-hooks';

import FollowButtonPresenter from './FollowButtonPresenter';
import { FOLLOW, UNFOLLOW } from './FollowButtonQueries';

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW);
  const [unfollowMutation] = useMutation(UNFOLLOW);

  const onClick = () => {
    if (isFollowingS) {
      setIsFollowing(false);
      unfollowMutation({ variables: { id } });
    } else {
      setIsFollowing(true);
      followMutation({ variables: { id } });
    }
  };

  return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowingS} />;
};


export default FollowButtonContainer;
