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

export interface Props {
  searchTerm: string;
  loading: boolean;
  data: SearchData;
}
