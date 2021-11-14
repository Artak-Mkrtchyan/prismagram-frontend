export interface User {
  id: string;
  avatar: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName: string;
  isFollowing: Boolean;
  isSelf: Boolean;
  bio: string;
  following: User[];
  followers: User[];
  postsCount: number;
  followingCount: number;
  followersCount: number;
  posts: any;
  likes: any;
  comments: any;
  channels: any;
  loginSecret: string;
  createdAt: string;
  updatedAt: string;
}

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

export interface Props {
  loading: boolean;
  data;
  logOut;
}
