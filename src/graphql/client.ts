import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Characters, Episodes, Locations } from 'src/graphql/generated/graphql';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter', ['name', 'species', 'gender', 'status']],
            merge(existing: Characters, incoming: Characters) {
              if (!existing) {
                return incoming;
              }
              if (existing.info.next === incoming.info.next) {
                return existing;
              }
              return {
                ...incoming,
                results: [...existing.results, ...incoming.results],
              };
            },
          },
          locations: {
            keyArgs: ['filter', ['name', 'dimension', 'type']],
            merge(existing: Locations, incoming: Locations) {
              if (!existing) {
                return incoming;
              }
              if (existing.info.next === incoming.info.next) {
                return existing;
              }
              return {
                ...incoming,
                results: [...existing.results, ...incoming.results],
              };
            },
          },
          episodes: {
            keyArgs: ['filter', ['name', 'episode']],
            merge(existing: Episodes, incoming: Episodes) {
              if (!existing) {
                return incoming;
              }
              if (existing.info.next === incoming.info.next) {
                return existing;
              }
              return {
                ...incoming,
                results: [...existing.results, ...incoming.results],
              };
            },
          },
        },
      },
    },
  }),
});
