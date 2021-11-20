import { TOKEN } from 'src/apollo/Client';

export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem(TOKEN)) || false,
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {

      localStorage.setItem(TOKEN, token);

      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_: any, __: any, { cache }: any) => {
      localStorage.removeItem(TOKEN);
      window.location.href = '/';
      return null;
    },
  },
};
