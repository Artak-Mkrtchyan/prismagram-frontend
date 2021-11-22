import { Button } from 'src/components/button';

export const FollowButtonPresenter = ({ isFollowing, onClick }) => (
  <Button onClick={onClick} text={isFollowing ? 'Unfollow' : 'Follow'} />
);
