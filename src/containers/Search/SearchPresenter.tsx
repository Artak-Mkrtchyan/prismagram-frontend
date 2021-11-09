import React from 'react';
import FatText from 'src/components/FatText';
import Loader from 'src/components/Loader';
import SquarePost from 'src/components/SquarePost';
import UserCard from 'src/components/UserCard';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text='Search for something' />
      </Wrapper>
    );
  } else if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <PostSection>
          {data.searchUser.length === 0 ? (
            <FatText text='No users found' />
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
            <FatText text='No post Found' />
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
