import { gql } from '@apollo/client';

export const GET_USER_FRAGMENT = gql`
  fragment GetUser on User {
    id
    avatar
    username
    fullName
    isFollowing
    isSelf
    bio
    followingCount
    followersCount
    postsCount
    posts {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
  }
`;
