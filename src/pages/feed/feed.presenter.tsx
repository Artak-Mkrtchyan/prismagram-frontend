import { Helmet } from 'react-helmet';
import { Loader } from 'src/components/Loader';
import Post from 'src/components/Post';

import { Wrapper } from './feed.styles';
import { Props } from './types';

export const FeedPresenter: React.FC<Props> = (props: Props) => {
  const { seeFeed, loading } = props;

  return (
    <Wrapper>
      <Helmet>
        <title>Feed | Prismagram</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        seeFeed &&
        seeFeed.map((post) => (
          <Post
            id={post.id}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            caption={post.caption}
            location={post.location}
            createdAt={post.createdAt}
          />
        ))}
    </Wrapper>
  );
};