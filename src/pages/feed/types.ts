export interface SeeFeed {
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
  seeFeed: SeeFeed[];
  loading: boolean;
}

export interface FeedData {
  seeFeed: Array<SeeFeed>;
}

export interface FeedVars {}
