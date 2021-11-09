import React from 'react';
import ReactDOM from 'react-dom';
import { client } from 'src/apollo/Client';
import { App } from 'src/containers/App';

import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
