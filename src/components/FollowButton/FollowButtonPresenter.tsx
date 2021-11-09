import React from 'react';
import Button from 'src/components/Button';

export default ({ isFollowing, onClick }) => (
  <Button onClick={onClick} text={isFollowing ? "Unfollow" : "Follow"} />
);
