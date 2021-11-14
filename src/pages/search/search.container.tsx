import { withRouter } from 'react-router';

import { useQuery } from '@apollo/client';

import { SEARCH } from './queries';
import SearchPresenter from './search.presenter';
import { SearchData, SearchVars } from './types';

export const SearchContainer = withRouter(({ location: { search } }) => {
  const [, term] = search.split('=');
  const { data, loading } = useQuery<SearchData, SearchVars>(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });

  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
});
