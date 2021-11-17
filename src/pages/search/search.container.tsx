import { withRouter } from 'react-router';
import { useSearch } from 'src/hooks/useSearch';

import SearchPresenter from './search.presenter';

export const SearchContainer = withRouter(({ location: { search } }) => {
  const [, term] = search.split('=');

  const { data, loading } = useSearch(term);

  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
});
