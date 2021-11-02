import { InMemoryCache } from 'apollo-cache-inmemory';

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }: { cache: InMemoryCache }) => {
      localStorage.setItem("token", token);
      console.log('cache', cache)
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.href = "/";
      return null;
    },
  },
};
