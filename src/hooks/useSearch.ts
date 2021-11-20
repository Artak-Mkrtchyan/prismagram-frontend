import { gql, useQuery } from '@apollo/client';

export const SEARCH = gql`
  query searchPost($term: String!) {
    searchPost(term: $term) {
      id
      files {
        url
      }
      likeCount
      commentCount
    }
    searchUser(term: $term) {
      id
      avatar
      username
      isFollowing
      isSelf
    }
  }
`;

export interface SearchUser {
  id: string;
  avatar: string;
  username: string;
  isFollowing: boolean;
  isSelf: boolean;
}

export interface SearchPost {
  id: string;
  files: {
    url: string;
  }[];
  likeCount: number;
  commentCount: number;
}

export interface SearchData {
  searchUser: SearchUser[];
  searchPost: SearchPost[];
}

export interface SearchVars {
  term: string;
}

export const useSearch = (term: string) => {
  const { data, loading } = useQuery<SearchData, SearchVars>(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });

  return { data, loading };
};
