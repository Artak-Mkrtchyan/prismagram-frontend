import { useQuery } from '@apollo/client';

import { FeedPresenter } from './feed.presenter';
import { FEED_QUERY } from './queries';
import { FeedData, FeedVars } from './types';

export const FeedContainer = () => {
  const { data, loading } = useQuery<FeedData, FeedVars>(FEED_QUERY);

  return <FeedPresenter seeFeed={data.seeFeed} loading={loading} />;
};
