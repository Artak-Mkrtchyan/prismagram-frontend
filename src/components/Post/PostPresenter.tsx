import TextareaAutosize from 'react-autosize-textarea';
import { Link } from 'react-router-dom';
import { Avatar } from 'src/components/avatar';
import { FatText } from 'src/components/fat-text';
import {
    CommentEmpty as CommentIcon, HeartEmpty, HeartFull
} from 'src/components/ui/elements/icons';
import styled from 'styled-components';

import { SIZE } from '../avatar/types';

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;

  a {
    color: inherit;
  }
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

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.div<{ src: string; showing: boolean }>`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
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
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 10px;
`;

const Comment = styled.li`
  margin-bottom: 7px;

  span {
    margin-right: 5px;
  }
`;

export const PostPresenter = ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
}) => {
  return (
    <Post>
      <Header>
        <Avatar size={SIZE.SMALL} url={avatar} />
        <UserColumn>
          <Link to={`/${username}`}>
            <FatText text={username} />
          </Link>
          <Location>{location}</Location>
        </UserColumn>
      </Header>
      <Files>
        {files &&
          files.map((file, index) => (
            <File
              key={file.id}
              src={file.url}
              id={file.id}
              showing={index === currentItem}
            />
          ))}
      </Files>
      <Meta>
        <Buttons>
          <Button onClick={() => toggleLike()}>
            {isLiked ? <HeartFull /> : <HeartEmpty />}
          </Button>
          <Button>
            <CommentIcon />
          </Button>
        </Buttons>
        <FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
        {comments && (
          <Comments>
            {comments.map((comment) => (
              <Comment key={comment.id}>
                <FatText text={comment.user.username} />
                {comment.text}
              </Comment>
            ))}
            {selfComments.map((comment) => (
              <Comment key={comment.id}>
                <FatText text={comment.user.username} />
                {comment.text}
              </Comment>
            ))}
          </Comments>
        )}

        <Timestamp>{createdAt}</Timestamp>
        <Textarea
          placeholder={'Add a comment...'}
          value={newComment.value}
          onKeyUp={onKeyPress}
          onChange={newComment.onChange}
        />
      </Meta>
    </Post>
  );
};
