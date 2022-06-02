import { ApolloClient } from '@apollo/client';
import { cache } from 'src/graphql/client/cache';
import { initialState } from 'src/graphql/client/cacheState';
import {
  CharacterFilterFragment,
  EpisodeFilterFragment,
  LocationFilterFragment,
} from 'src/graphql/generated/graphql';

import {
  GET_FILTER_CHARACTER,
  GET_FILTER_EPISODE,
  GET_FILTER_LOCATION,
} from 'src/graphql/query/filters';

initialState();
export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
  resolvers: {
    Mutation: {
      characterFilter: (_, variables: CharacterFilterFragment, context) => {
        const { characterFilter } = context.cache.readQuery({
          query: GET_FILTER_CHARACTER,
        });
        context.cache.writeQuery({
          query: GET_FILTER_CHARACTER,
          data: {
            characterFilter: {
              ...characterFilter,
              ...variables,
            },
          },
        });
      },
      locationFilter: (_: {}, variables: LocationFilterFragment, context) => {
        const { locationFilter } = context.cache.readQuery({
          query: GET_FILTER_LOCATION,
        });
        context.cache.writeQuery({
          query: GET_FILTER_LOCATION,
          data: {
            locationFilter: {
              ...locationFilter,
              ...variables,
            },
          },
        });
      },
      episodeFilter: (_, variables: EpisodeFilterFragment, context) => {
        const { episodeFilter } = context.cache.readQuery({
          query: GET_FILTER_EPISODE,
        });
        context.cache.writeQuery({
          query: GET_FILTER_EPISODE,
          data: {
            episodeFilter: {
              ...episodeFilter,
              ...variables,
            },
          },
        });
      },
    },
  },
});
