import React from 'react';
import { FatText } from 'src/components/fat-text';
import { Loader } from 'src/components/loader';
import { SquarePost } from 'src/components/square-post';
import { UserCard } from 'src/components/user-card';

import { PostSection, Wrapper } from './search.styles';
import { Props } from './types';

const SearchPresenter: React.FC<Props> = (props: Props) => {
  const { searchTerm, loading, data } = props;

  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <PostSection>
          {data.searchUser.length === 0 ? (
            <FatText text="No users found" />
          ) : (
            data.searchUser.map((user) => (
              <UserCard
                id={user.id}
                username={user.username}
                isFollowing={user.isFollowing}
                url={user.avatar}
                isSelf={user.isSelf}
              />
            ))
          )}
        </PostSection>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text="No post Found" />
          ) : (
            data.searchPost.map((post) => (
              <SquarePost
                file={post.files[0]}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
              />
            ))
          )}
        </PostSection>
      </Wrapper>
    );
  }

  return <div></div>;
};

export default SearchPresenter;
