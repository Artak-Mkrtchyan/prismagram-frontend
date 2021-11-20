import { useGetFeed } from 'src/hooks/useGetFeed';

import { FeedPresenter } from './feed.presenter';

export const FeedContainer = () => {
  const { data, loading } = useGetFeed();

  return <FeedPresenter feed={data?.seeFeed} loading={loading} />;
};
