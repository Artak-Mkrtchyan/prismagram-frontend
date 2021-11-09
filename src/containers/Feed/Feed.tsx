import React from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from 'src/components/Loader';
import Post from 'src/components/Post';
import styled from 'styled-components';

import { gql, useQuery } from '@apollo/client';

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export const Feed = () => {
  const feed = useQuery(FEED_QUERY);
  console.log(feed);

  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>
      {feed.loading && <Loader />}
      {!feed.loading &&
        feed.data &&
        feed.data.seeFeed &&
        feed.data.seeFeed.map((post) => (
          <Post
            id={post.id}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            caption={post.caption}
            location={post.location}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};
