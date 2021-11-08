import { InMemoryCache } from 'apollo-cache-inmemory';

import { TOKEN } from './Client';

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem(TOKEN)) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }: { cache: InMemoryCache }) => {
      localStorage.setItem(TOKEN, token);
      console.log('cache', cache)
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem(TOKEN);
      window.location.href = "/";
      return null;
    },
  },
};
