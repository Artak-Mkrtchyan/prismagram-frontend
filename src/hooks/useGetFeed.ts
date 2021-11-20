import { gql, useQuery } from '@apollo/client';

export interface Feed {
  id: string;
  location: string;
  caption: string;
  user: {
    id: string;
    avatar: string;
    username: string;
  }[];
  files: {
    id: string;
    url: string;
  }[];
  likeCount: number;
  isLiked: boolean;
  comments: {
    id: string;
    text: string;
    user: {
      id: string;
      username: string;
    };
  }[];
  createdAt: string;
}

export interface Props {
  seeFeed: Feed[];
  loading: boolean;
}

export interface FeedData {
  seeFeed: Array<Feed>;
}

export interface FeedVars {}

export const FEED_QUERY = gql`
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

export const useGetFeed = () => {
  const { data, loading } = useQuery<FeedData, FeedVars>(FEED_QUERY);

  return { data, loading };
};
