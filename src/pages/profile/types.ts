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

export interface Props {
  loading: boolean;
  data;
  logOut;
}
