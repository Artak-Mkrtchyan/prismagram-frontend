import { GET_USER_FRAGMENT } from 'src/fragments/user';

import { gql, useQuery } from '@apollo/client';

export interface SeeUser {
  id: string;
  avatar: string;
  username: string;
  fullName: string;
  isFollowing: boolean;
  isSelf: boolean;
  bio: string;
  followingCount: number;
  followersCount: number;
  postsCount: number;
  posts: {
    id: string;
    files: {
      url: string;
    };
    likeCount: number;
    commentCount: number;
  }[];
}

export interface GetUserData {
  seeUser: SeeUser;
}

export interface GetUserVars {
  username: string;
}

export const GET_USER = gql`
  ${GET_USER_FRAGMENT}
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...GetUser
    }
  }
`;

export const useGetUser = (username: string) => {
  const { data, loading } = useQuery<GetUserData, GetUserVars>(GET_USER, {
    variables: { username },
  });

  return { data, loading };
};
