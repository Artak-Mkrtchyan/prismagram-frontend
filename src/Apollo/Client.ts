import {
    ApolloClient, createHttpLink, gql, InMemoryCache, makeVar, NormalizedCacheObject, Reference
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem('token')));


export const cache: InMemoryCache = new InMemoryCache({});

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  
  const token = localStorage.getItem('token');
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});
