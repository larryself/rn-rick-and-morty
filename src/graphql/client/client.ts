import { ApolloClient } from '@apollo/client';

import { cache } from 'src/graphql/client/cache';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
});
