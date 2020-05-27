import React from "react";
import styled from "styled-components";

import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment } from "../Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.div`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div``;

const File = styled.img`
  max-width: 100%;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  display: block;
  border-bottom: 1px solid ${(props) => props.theme.lightGrayColor};
`;

export default ({ user: { username, avatar }, location, files, isLiked, likeCount, createdAt }) => {
  return (
    <Post>
      <Header>
        <Avatar size='sm' url={avatar} />
        <UserColumn>
          <FatText text={username} />
          <Location>{location}</Location>
        </UserColumn>
      </Header>
      <Files>
        {files && files.map((file) => <File key={file.id} src={file.url} id={file.id} />)}
      </Files>
      <Meta>
        <Buttons>
          <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
          <Button>
            <Comment />
          </Button>
        </Buttons>
        <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
        <Timestamp>{createdAt}</Timestamp>
      </Meta>
    </Post>
  );
};
