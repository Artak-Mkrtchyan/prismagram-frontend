import { Helmet } from 'react-helmet';
import { Avatar } from 'src/components/avatar';
import { SIZE } from 'src/components/avatar/types';
import { Button } from 'src/components/button';
import { FatText } from 'src/components/fat-text';
import FollowButton from 'src/components/follow-button';
import { Loader } from 'src/components/loader';
import { SquarePost } from 'src/components/square-post';

import {
    Bio, Count, Counts, FullName, Header, HeaderColumn, Posts, Username, UsernameRow, Wrapper
} from './profile.styles';
import { Props } from './types';

export const ProfilePresenter: React.FC<Props> = (props: Props) => {
  const { loading, data, logOut } = props;

  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts,
      },
    } = data;
    return (
      <Wrapper>
        <Helmet>
          <title>{username} | Prismagram</title>
        </Helmet>
        <Header>
          <HeaderColumn>
            <Avatar size={SIZE.LARGE} url={avatar} />
          </HeaderColumn>
          <HeaderColumn>
            <UsernameRow>
              <Username>{username}</Username>{' '}
              {isSelf ? (
                <Button onClick={logOut} text="Log Out" />
              ) : (
                <FollowButton isFollowing={isFollowing} id={id} />
              )}
            </UsernameRow>
            <Counts>
              <Count>
                <FatText text={String(postsCount)} /> posts
              </Count>
              <Count>
                <FatText text={String(followersCount)} /> followers
              </Count>
              <Count>
                <FatText text={String(followingCount)} /> following
              </Count>
            </Counts>
            <FullName text={fullName} />
            <Bio>{bio}</Bio>
          </HeaderColumn>
        </Header>
        <Posts>
          {posts &&
            posts.map((post) => (
              <SquarePost
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))}
        </Posts>
      </Wrapper>
    );
  }

  return null;
};
