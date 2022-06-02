import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  State: any;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Character = {
  __typename?: 'Character';
  created: Maybe<Scalars['String']>;
  episode: Array<Maybe<Episode>>;
  gender: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  image: Maybe<Scalars['String']>;
  location: Maybe<Location>;
  name: Maybe<Scalars['String']>;
  origin: Maybe<Location>;
  species: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type CharacterFilter = {
  __typename?: 'CharacterFilter';
  gender: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  species: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date: Maybe<Scalars['String']>;
  characters: Array<Maybe<Character>>;
  created: Maybe<Scalars['String']>;
  episode: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type EpisodeFilter = {
  __typename?: 'EpisodeFilter';
  episode: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  species: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type Filters = {
  __typename?: 'Filters';
  characterFilter: Maybe<CharacterFilter>;
  episodeFilter: Maybe<EpisodeFilter>;
  locationFilter: Maybe<LocationFilter>;
};

export type Info = {
  __typename?: 'Info';
  count: Maybe<Scalars['Int']>;
  next: Maybe<Scalars['Int']>;
  pages: Maybe<Scalars['Int']>;
  prev: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  created: Maybe<Scalars['String']>;
  dimension: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  residents: Array<Maybe<Character>>;
  type: Maybe<Scalars['String']>;
};

export type LocationFilter = {
  __typename?: 'LocationFilter';
  dimension: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Location>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  characterFilter: Maybe<Scalars['String']>;
  episodeFilter: Maybe<Scalars['String']>;
  locationFilter: Maybe<Scalars['String']>;
};

export type MutationCharacterFilterArgs = {
  gender: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  species: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
};

export type MutationEpisodeFilterArgs = {
  episode: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};

export type MutationLocationFilterArgs = {
  dimension: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  character: Maybe<Character>;
  characterFilter: Maybe<CharacterFilter>;
  characters: Maybe<Characters>;
  charactersByIds: Maybe<Array<Maybe<Character>>>;
  episode: Maybe<Episode>;
  episodeFilter: Maybe<EpisodeFilter>;
  episodes: Maybe<Episodes>;
  episodesByIds: Maybe<Array<Maybe<Episode>>>;
  filters: Maybe<Filters>;
  location: Maybe<Location>;
  locationFilter: Maybe<LocationFilter>;
  locations: Maybe<Locations>;
  locationsByIds: Maybe<Array<Maybe<Location>>>;
};

export type QueryCharacterArgs = {
  id: Scalars['ID'];
};

export type QueryCharactersArgs = {
  filter: InputMaybe<FilterCharacter>;
  page: InputMaybe<Scalars['Int']>;
};

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};

export type QueryEpisodesArgs = {
  filter: InputMaybe<FilterEpisode>;
  page: InputMaybe<Scalars['Int']>;
};

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type QueryLocationArgs = {
  id: Scalars['ID'];
};

export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>;
  page: InputMaybe<Scalars['Int']>;
};

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type GetCharactersQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
  species: InputMaybe<Scalars['String']>;
  gender: InputMaybe<Scalars['String']>;
  status: InputMaybe<Scalars['String']>;
}>;

export type GetCharactersQuery = {
  __typename?: 'Query';
  characters: {
    __typename?: 'Characters';
    info: { __typename?: 'Info'; pages: number; next: number };
    results: Array<{
      __typename?: 'Character';
      id: string;
      name: string;
      status: string;
      image: string;
    }>;
  };
};

export type GetCharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetCharacterQuery = {
  __typename?: 'Query';
  character: {
    __typename?: 'Character';
    species: string;
    type: string;
    gender: string;
    id: string;
    name: string;
    status: string;
    image: string;
    origin: { __typename?: 'Location'; name: string };
    location: {
      __typename?: 'Location';
      id: string;
      type: string;
      name: string;
      dimension: string;
    };
    episode: Array<{
      __typename?: 'Episode';
      id: string;
      air_date: string;
      name: string;
      episode: string;
    }>;
  };
};

export type GetCharactersNameQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
}>;

export type GetCharactersNameQuery = {
  __typename?: 'Query';
  characters: {
    __typename?: 'Characters';
    results: Array<{ __typename?: 'Character'; id: string; name: string }>;
  };
};

export type GetCharactersSpeciesQueryVariables = Exact<{
  species: InputMaybe<Scalars['String']>;
}>;

export type GetCharactersSpeciesQuery = {
  __typename?: 'Query';
  characters: {
    __typename?: 'Characters';
    results: Array<{ __typename?: 'Character'; id: string; species: string }>;
  };
};

export type GetEpisodesQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
  episode: InputMaybe<Scalars['String']>;
}>;

export type GetEpisodesQuery = {
  __typename?: 'Query';
  episodes: {
    __typename?: 'Episodes';
    info: { __typename?: 'Info'; pages: number; next: number };
    results: Array<{
      __typename?: 'Episode';
      id: string;
      air_date: string;
      name: string;
      episode: string;
    }>;
  };
};

export type GetEpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetEpisodeQuery = {
  __typename?: 'Query';
  episode: {
    __typename?: 'Episode';
    id: string;
    air_date: string;
    name: string;
    episode: string;
    characters: Array<{
      __typename?: 'Character';
      id: string;
      name: string;
      status: string;
      image: string;
    }>;
  };
};

export type GetEpisodesNameQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
}>;

export type GetEpisodesNameQuery = {
  __typename?: 'Query';
  episodes: {
    __typename?: 'Episodes';
    results: Array<{ __typename?: 'Episode'; id: string; name: string }>;
  };
};

export type CharacterFilterFragment = {
  __typename?: 'CharacterFilter';
  name: string;
  status: string;
  gender: string;
  species: string;
};

export type LocationFilterFragment = {
  __typename?: 'LocationFilter';
  name: string;
  type: string;
  dimension: string;
};

export type EpisodeFilterFragment = {
  __typename?: 'EpisodeFilter';
  name: string;
  episode: string;
};

export type GetFilterQueryVariables = Exact<{ [key: string]: never }>;

export type GetFilterQuery = {
  __typename?: 'Query';
  characterFilter: {
    __typename?: 'CharacterFilter';
    name: string;
    status: string;
    gender: string;
    species: string;
  };
  locationFilter: {
    __typename?: 'LocationFilter';
    name: string;
    type: string;
    dimension: string;
  };
  episodeFilter: {
    __typename?: 'EpisodeFilter';
    name: string;
    episode: string;
  };
};

export type GetFilterCharactersQueryVariables = Exact<{ [key: string]: never }>;

export type GetFilterCharactersQuery = {
  __typename?: 'Query';
  characterFilter: {
    __typename?: 'CharacterFilter';
    name: string;
    status: string;
    gender: string;
    species: string;
  };
};

export type GetFilterLocationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetFilterLocationsQuery = {
  __typename?: 'Query';
  locationFilter: {
    __typename?: 'LocationFilter';
    name: string;
    type: string;
    dimension: string;
  };
};

export type GetFilterEpisodeQueryVariables = Exact<{ [key: string]: never }>;

export type GetFilterEpisodeQuery = {
  __typename?: 'Query';
  episodeFilter: {
    __typename?: 'EpisodeFilter';
    name: string;
    episode: string;
  };
};

export type CharacterFilterMutationVariables = Exact<{
  name: Scalars['String'];
  species: Scalars['String'];
  gender: Scalars['String'];
  status: Scalars['String'];
}>;

export type CharacterFilterMutation = {
  __typename?: 'Mutation';
  characterFilter: string;
};

export type EpisodeFilterMutationVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
  episode: InputMaybe<Scalars['String']>;
}>;

export type EpisodeFilterMutation = {
  __typename?: 'Mutation';
  episodeFilter: string;
};

export type LocationFilterMutationVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
  dimension: InputMaybe<Scalars['String']>;
}>;

export type LocationFilterMutation = {
  __typename?: 'Mutation';
  locationFilter: string;
};

export type CharactersFragment = {
  __typename?: 'Character';
  id: string;
  name: string;
  status: string;
  image: string;
};

export type InfoFragment = { __typename?: 'Info'; pages: number; next: number };

export type CharacterFragment = {
  __typename?: 'Character';
  species: string;
  type: string;
  gender: string;
  id: string;
  name: string;
  status: string;
  image: string;
};

export type EpisodesFragment = {
  __typename?: 'Episode';
  id: string;
  air_date: string;
  name: string;
  episode: string;
};

export type LocationsFragment = {
  __typename?: 'Location';
  id: string;
  type: string;
  name: string;
  dimension: string;
};

export type GetLocationsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
  dimension: InputMaybe<Scalars['String']>;
}>;

export type GetLocationsQuery = {
  __typename?: 'Query';
  locations: {
    __typename?: 'Locations';
    info: { __typename?: 'Info'; pages: number; next: number };
    results: Array<{
      __typename?: 'Location';
      id: string;
      type: string;
      name: string;
      dimension: string;
    }>;
  };
};

export type GetLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetLocationQuery = {
  __typename?: 'Query';
  location: {
    __typename?: 'Location';
    id: string;
    type: string;
    name: string;
    dimension: string;
    residents: Array<{
      __typename?: 'Character';
      id: string;
      name: string;
      status: string;
      image: string;
    }>;
  };
};

export type GetLocationsNameQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']>;
}>;

export type GetLocationsNameQuery = {
  __typename?: 'Query';
  locations: {
    __typename?: 'Locations';
    results: Array<{ __typename?: 'Location'; id: string; name: string }>;
  };
};

export type GetLocationsTypeQueryVariables = Exact<{
  type: InputMaybe<Scalars['String']>;
}>;

export type GetLocationsTypeQuery = {
  __typename?: 'Query';
  locations: {
    __typename?: 'Locations';
    results: Array<{ __typename?: 'Location'; id: string; type: string }>;
  };
};

export type GetLocationsDimensionQueryVariables = Exact<{
  dimension: InputMaybe<Scalars['String']>;
}>;

export type GetLocationsDimensionQuery = {
  __typename?: 'Query';
  locations: {
    __typename?: 'Locations';
    results: Array<{ __typename?: 'Location'; id: string; dimension: string }>;
  };
};

export const CharacterFilterFragmentDoc = gql`
  fragment characterFilter on CharacterFilter {
    name
    status
    gender
    species
  }
`;
export const LocationFilterFragmentDoc = gql`
  fragment locationFilter on LocationFilter {
    name
    type
    dimension
  }
`;
export const EpisodeFilterFragmentDoc = gql`
  fragment episodeFilter on EpisodeFilter {
    name
    episode
  }
`;
export const InfoFragmentDoc = gql`
  fragment info on Info {
    pages
    next
  }
`;
export const CharactersFragmentDoc = gql`
  fragment characters on Character {
    id
    name
    status
    image
  }
`;
export const CharacterFragmentDoc = gql`
  fragment character on Character {
    ...characters
    species
    type
    gender
  }
  ${CharactersFragmentDoc}
`;
export const EpisodesFragmentDoc = gql`
  fragment episodes on Episode {
    id
    air_date
    name
    episode
  }
`;
export const LocationsFragmentDoc = gql`
  fragment locations on Location {
    id
    type
    name
    dimension
  }
`;
export const GetCharactersDocument = gql`
  query getCharacters(
    $page: Int
    $name: String
    $species: String
    $gender: String
    $status: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        species: $species
        gender: $gender
        status: $status
      }
    ) {
      info {
        ...info
      }
      results {
        ...characters
      }
    }
  }
  ${InfoFragmentDoc}
  ${CharactersFragmentDoc}
`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *      species: // value for 'species'
 *      gender: // value for 'gender'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}
export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}
export type GetCharactersQueryHookResult = ReturnType<
  typeof useGetCharactersQuery
>;
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>;
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>;
export const GetCharacterDocument = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      ...character
      origin {
        name
      }
      location {
        ...locations
      }
      episode {
        ...episodes
      }
    }
  }
  ${CharacterFragmentDoc}
  ${LocationsFragmentDoc}
  ${EpisodesFragmentDoc}
`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export function useGetCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export type GetCharacterQueryHookResult = ReturnType<
  typeof useGetCharacterQuery
>;
export type GetCharacterLazyQueryHookResult = ReturnType<
  typeof useGetCharacterLazyQuery
>;
export type GetCharacterQueryResult = Apollo.QueryResult<
  GetCharacterQuery,
  GetCharacterQueryVariables
>;
export const GetCharactersNameDocument = gql`
  query getCharactersName($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;

/**
 * __useGetCharactersNameQuery__
 *
 * To run a query within a React component, call `useGetCharactersNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCharactersNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >(GetCharactersNameDocument, options);
}
export function useGetCharactersNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >(GetCharactersNameDocument, options);
}
export type GetCharactersNameQueryHookResult = ReturnType<
  typeof useGetCharactersNameQuery
>;
export type GetCharactersNameLazyQueryHookResult = ReturnType<
  typeof useGetCharactersNameLazyQuery
>;
export type GetCharactersNameQueryResult = Apollo.QueryResult<
  GetCharactersNameQuery,
  GetCharactersNameQueryVariables
>;
export const GetCharactersSpeciesDocument = gql`
  query getCharactersSpecies($species: String) {
    characters(filter: { species: $species }) {
      results {
        id
        species
      }
    }
  }
`;

/**
 * __useGetCharactersSpeciesQuery__
 *
 * To run a query within a React component, call `useGetCharactersSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersSpeciesQuery({
 *   variables: {
 *      species: // value for 'species'
 *   },
 * });
 */
export function useGetCharactersSpeciesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >(GetCharactersSpeciesDocument, options);
}
export function useGetCharactersSpeciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >(GetCharactersSpeciesDocument, options);
}
export type GetCharactersSpeciesQueryHookResult = ReturnType<
  typeof useGetCharactersSpeciesQuery
>;
export type GetCharactersSpeciesLazyQueryHookResult = ReturnType<
  typeof useGetCharactersSpeciesLazyQuery
>;
export type GetCharactersSpeciesQueryResult = Apollo.QueryResult<
  GetCharactersSpeciesQuery,
  GetCharactersSpeciesQueryVariables
>;
export const GetEpisodesDocument = gql`
  query getEpisodes($page: Int, $name: String, $episode: String) {
    episodes(page: $page, filter: { name: $name, episode: $episode }) {
      info {
        ...info
      }
      results {
        ...episodes
      }
    }
  }
  ${InfoFragmentDoc}
  ${EpisodesFragmentDoc}
`;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useGetEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  );
}
export function useGetEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options
  );
}
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesLazyQuery
>;
export type GetEpisodesQueryResult = Apollo.QueryResult<
  GetEpisodesQuery,
  GetEpisodesQueryVariables
>;
export const GetEpisodeDocument = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      ...episodes
      characters {
        ...characters
      }
    }
  }
  ${EpisodesFragmentDoc}
  ${CharactersFragmentDoc}
`;

/**
 * __useGetEpisodeQuery__
 *
 * To run a query within a React component, call `useGetEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEpisodeQuery,
    GetEpisodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(
    GetEpisodeDocument,
    options
  );
}
export function useGetEpisodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodeQuery,
    GetEpisodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(
    GetEpisodeDocument,
    options
  );
}
export type GetEpisodeQueryHookResult = ReturnType<typeof useGetEpisodeQuery>;
export type GetEpisodeLazyQueryHookResult = ReturnType<
  typeof useGetEpisodeLazyQuery
>;
export type GetEpisodeQueryResult = Apollo.QueryResult<
  GetEpisodeQuery,
  GetEpisodeQueryVariables
>;
export const GetEpisodesNameDocument = gql`
  query getEpisodesName($name: String) {
    episodes(filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;

/**
 * __useGetEpisodesNameQuery__
 *
 * To run a query within a React component, call `useGetEpisodesNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetEpisodesNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesNameQuery,
    GetEpisodesNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEpisodesNameQuery, GetEpisodesNameQueryVariables>(
    GetEpisodesNameDocument,
    options
  );
}
export function useGetEpisodesNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesNameQuery,
    GetEpisodesNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetEpisodesNameQuery,
    GetEpisodesNameQueryVariables
  >(GetEpisodesNameDocument, options);
}
export type GetEpisodesNameQueryHookResult = ReturnType<
  typeof useGetEpisodesNameQuery
>;
export type GetEpisodesNameLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesNameLazyQuery
>;
export type GetEpisodesNameQueryResult = Apollo.QueryResult<
  GetEpisodesNameQuery,
  GetEpisodesNameQueryVariables
>;
export const GetFilterDocument = gql`
  query getFilter {
    characterFilter @client {
      name
      status
      gender
      species
    }
    locationFilter @client {
      name
      type
      dimension
    }
    episodeFilter @client {
      name
      episode
    }
  }
`;

/**
 * __useGetFilterQuery__
 *
 * To run a query within a React component, call `useGetFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilterQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFilterQuery, GetFilterQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilterQuery, GetFilterQueryVariables>(
    GetFilterDocument,
    options
  );
}
export function useGetFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilterQuery,
    GetFilterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilterQuery, GetFilterQueryVariables>(
    GetFilterDocument,
    options
  );
}
export type GetFilterQueryHookResult = ReturnType<typeof useGetFilterQuery>;
export type GetFilterLazyQueryHookResult = ReturnType<
  typeof useGetFilterLazyQuery
>;
export type GetFilterQueryResult = Apollo.QueryResult<
  GetFilterQuery,
  GetFilterQueryVariables
>;
export const GetFilterCharactersDocument = gql`
  query getFilterCharacters {
    characterFilter {
      name
      status
      gender
      species
    }
  }
`;

/**
 * __useGetFilterCharactersQuery__
 *
 * To run a query within a React component, call `useGetFilterCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilterCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFilterCharactersQuery,
    GetFilterCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFilterCharactersQuery,
    GetFilterCharactersQueryVariables
  >(GetFilterCharactersDocument, options);
}
export function useGetFilterCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilterCharactersQuery,
    GetFilterCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFilterCharactersQuery,
    GetFilterCharactersQueryVariables
  >(GetFilterCharactersDocument, options);
}
export type GetFilterCharactersQueryHookResult = ReturnType<
  typeof useGetFilterCharactersQuery
>;
export type GetFilterCharactersLazyQueryHookResult = ReturnType<
  typeof useGetFilterCharactersLazyQuery
>;
export type GetFilterCharactersQueryResult = Apollo.QueryResult<
  GetFilterCharactersQuery,
  GetFilterCharactersQueryVariables
>;
export const GetFilterLocationsDocument = gql`
  query getFilterLocations {
    locationFilter @client {
      name
      type
      dimension
    }
  }
`;

/**
 * __useGetFilterLocationsQuery__
 *
 * To run a query within a React component, call `useGetFilterLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilterLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFilterLocationsQuery,
    GetFilterLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFilterLocationsQuery,
    GetFilterLocationsQueryVariables
  >(GetFilterLocationsDocument, options);
}
export function useGetFilterLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilterLocationsQuery,
    GetFilterLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFilterLocationsQuery,
    GetFilterLocationsQueryVariables
  >(GetFilterLocationsDocument, options);
}
export type GetFilterLocationsQueryHookResult = ReturnType<
  typeof useGetFilterLocationsQuery
>;
export type GetFilterLocationsLazyQueryHookResult = ReturnType<
  typeof useGetFilterLocationsLazyQuery
>;
export type GetFilterLocationsQueryResult = Apollo.QueryResult<
  GetFilterLocationsQuery,
  GetFilterLocationsQueryVariables
>;
export const GetFilterEpisodeDocument = gql`
  query getFilterEpisode {
    episodeFilter {
      name
      episode
    }
  }
`;

/**
 * __useGetFilterEpisodeQuery__
 *
 * To run a query within a React component, call `useGetFilterEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterEpisodeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilterEpisodeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFilterEpisodeQuery,
    GetFilterEpisodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilterEpisodeQuery, GetFilterEpisodeQueryVariables>(
    GetFilterEpisodeDocument,
    options
  );
}
export function useGetFilterEpisodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilterEpisodeQuery,
    GetFilterEpisodeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFilterEpisodeQuery,
    GetFilterEpisodeQueryVariables
  >(GetFilterEpisodeDocument, options);
}
export type GetFilterEpisodeQueryHookResult = ReturnType<
  typeof useGetFilterEpisodeQuery
>;
export type GetFilterEpisodeLazyQueryHookResult = ReturnType<
  typeof useGetFilterEpisodeLazyQuery
>;
export type GetFilterEpisodeQueryResult = Apollo.QueryResult<
  GetFilterEpisodeQuery,
  GetFilterEpisodeQueryVariables
>;
export const CharacterFilterDocument = gql`
  mutation characterFilter(
    $name: String!
    $species: String!
    $gender: String!
    $status: String!
  ) {
    characterFilter(
      name: $name
      species: $species
      gender: $gender
      status: $status
    ) @client
  }
`;
export type CharacterFilterMutationFn = Apollo.MutationFunction<
  CharacterFilterMutation,
  CharacterFilterMutationVariables
>;

/**
 * __useCharacterFilterMutation__
 *
 * To run a mutation, you first call `useCharacterFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCharacterFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [characterFilterMutation, { data, loading, error }] = useCharacterFilterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      species: // value for 'species'
 *      gender: // value for 'gender'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCharacterFilterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CharacterFilterMutation,
    CharacterFilterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CharacterFilterMutation,
    CharacterFilterMutationVariables
  >(CharacterFilterDocument, options);
}
export type CharacterFilterMutationHookResult = ReturnType<
  typeof useCharacterFilterMutation
>;
export type CharacterFilterMutationResult =
  Apollo.MutationResult<CharacterFilterMutation>;
export type CharacterFilterMutationOptions = Apollo.BaseMutationOptions<
  CharacterFilterMutation,
  CharacterFilterMutationVariables
>;
export const EpisodeFilterDocument = gql`
  mutation episodeFilter($name: String, $episode: String) {
    episodeFilter(name: $name, episode: $episode) @client
  }
`;
export type EpisodeFilterMutationFn = Apollo.MutationFunction<
  EpisodeFilterMutation,
  EpisodeFilterMutationVariables
>;

/**
 * __useEpisodeFilterMutation__
 *
 * To run a mutation, you first call `useEpisodeFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEpisodeFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [episodeFilterMutation, { data, loading, error }] = useEpisodeFilterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useEpisodeFilterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EpisodeFilterMutation,
    EpisodeFilterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    EpisodeFilterMutation,
    EpisodeFilterMutationVariables
  >(EpisodeFilterDocument, options);
}
export type EpisodeFilterMutationHookResult = ReturnType<
  typeof useEpisodeFilterMutation
>;
export type EpisodeFilterMutationResult =
  Apollo.MutationResult<EpisodeFilterMutation>;
export type EpisodeFilterMutationOptions = Apollo.BaseMutationOptions<
  EpisodeFilterMutation,
  EpisodeFilterMutationVariables
>;
export const LocationFilterDocument = gql`
  mutation locationFilter($name: String, $type: String, $dimension: String) {
    locationFilter(name: $name, type: $type, dimension: $dimension) @client
  }
`;
export type LocationFilterMutationFn = Apollo.MutationFunction<
  LocationFilterMutation,
  LocationFilterMutationVariables
>;

/**
 * __useLocationFilterMutation__
 *
 * To run a mutation, you first call `useLocationFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationFilterMutation, { data, loading, error }] = useLocationFilterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      dimension: // value for 'dimension'
 *   },
 * });
 */
export function useLocationFilterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LocationFilterMutation,
    LocationFilterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    LocationFilterMutation,
    LocationFilterMutationVariables
  >(LocationFilterDocument, options);
}
export type LocationFilterMutationHookResult = ReturnType<
  typeof useLocationFilterMutation
>;
export type LocationFilterMutationResult =
  Apollo.MutationResult<LocationFilterMutation>;
export type LocationFilterMutationOptions = Apollo.BaseMutationOptions<
  LocationFilterMutation,
  LocationFilterMutationVariables
>;
export const GetLocationsDocument = gql`
  query getLocations(
    $page: Int
    $name: String
    $type: String
    $dimension: String
  ) {
    locations(
      page: $page
      filter: { name: $name, type: $type, dimension: $dimension }
    ) {
      info {
        ...info
      }
      results {
        ...locations
      }
    }
  }
  ${InfoFragmentDoc}
  ${LocationsFragmentDoc}
`;

/**
 * __useGetLocationsQuery__
 *
 * To run a query within a React component, call `useGetLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      dimension: // value for 'dimension'
 *   },
 * });
 */
export function useGetLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options
  );
}
export type GetLocationsQueryHookResult = ReturnType<
  typeof useGetLocationsQuery
>;
export type GetLocationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsLazyQuery
>;
export type GetLocationsQueryResult = Apollo.QueryResult<
  GetLocationsQuery,
  GetLocationsQueryVariables
>;
export const GetLocationDocument = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      ...locations
      residents {
        ...characters
      }
    }
  }
  ${LocationsFragmentDoc}
  ${CharactersFragmentDoc}
`;

/**
 * __useGetLocationQuery__
 *
 * To run a query within a React component, call `useGetLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options
  );
}
export function useGetLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options
  );
}
export type GetLocationQueryHookResult = ReturnType<typeof useGetLocationQuery>;
export type GetLocationLazyQueryHookResult = ReturnType<
  typeof useGetLocationLazyQuery
>;
export type GetLocationQueryResult = Apollo.QueryResult<
  GetLocationQuery,
  GetLocationQueryVariables
>;
export const GetLocationsNameDocument = gql`
  query getLocationsName($name: String) {
    locations(filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;

/**
 * __useGetLocationsNameQuery__
 *
 * To run a query within a React component, call `useGetLocationsNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetLocationsNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsNameQuery,
    GetLocationsNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsNameQuery, GetLocationsNameQueryVariables>(
    GetLocationsNameDocument,
    options
  );
}
export function useGetLocationsNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsNameQuery,
    GetLocationsNameQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationsNameQuery,
    GetLocationsNameQueryVariables
  >(GetLocationsNameDocument, options);
}
export type GetLocationsNameQueryHookResult = ReturnType<
  typeof useGetLocationsNameQuery
>;
export type GetLocationsNameLazyQueryHookResult = ReturnType<
  typeof useGetLocationsNameLazyQuery
>;
export type GetLocationsNameQueryResult = Apollo.QueryResult<
  GetLocationsNameQuery,
  GetLocationsNameQueryVariables
>;
export const GetLocationsTypeDocument = gql`
  query getLocationsTYPE($type: String) {
    locations(filter: { type: $type }) {
      results {
        id
        type
      }
    }
  }
`;

/**
 * __useGetLocationsTypeQuery__
 *
 * To run a query within a React component, call `useGetLocationsTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetLocationsTypeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsTypeQuery,
    GetLocationsTypeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationsTypeQuery, GetLocationsTypeQueryVariables>(
    GetLocationsTypeDocument,
    options
  );
}
export function useGetLocationsTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsTypeQuery,
    GetLocationsTypeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationsTypeQuery,
    GetLocationsTypeQueryVariables
  >(GetLocationsTypeDocument, options);
}
export type GetLocationsTypeQueryHookResult = ReturnType<
  typeof useGetLocationsTypeQuery
>;
export type GetLocationsTypeLazyQueryHookResult = ReturnType<
  typeof useGetLocationsTypeLazyQuery
>;
export type GetLocationsTypeQueryResult = Apollo.QueryResult<
  GetLocationsTypeQuery,
  GetLocationsTypeQueryVariables
>;
export const GetLocationsDimensionDocument = gql`
  query getLocationsDimension($dimension: String) {
    locations(filter: { dimension: $dimension }) {
      results {
        id
        dimension
      }
    }
  }
`;

/**
 * __useGetLocationsDimensionQuery__
 *
 * To run a query within a React component, call `useGetLocationsDimensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationsDimensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationsDimensionQuery({
 *   variables: {
 *      dimension: // value for 'dimension'
 *   },
 * });
 */
export function useGetLocationsDimensionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsDimensionQuery,
    GetLocationsDimensionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetLocationsDimensionQuery,
    GetLocationsDimensionQueryVariables
  >(GetLocationsDimensionDocument, options);
}
export function useGetLocationsDimensionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsDimensionQuery,
    GetLocationsDimensionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLocationsDimensionQuery,
    GetLocationsDimensionQueryVariables
  >(GetLocationsDimensionDocument, options);
}
export type GetLocationsDimensionQueryHookResult = ReturnType<
  typeof useGetLocationsDimensionQuery
>;
export type GetLocationsDimensionLazyQueryHookResult = ReturnType<
  typeof useGetLocationsDimensionLazyQuery
>;
export type GetLocationsDimensionQueryResult = Apollo.QueryResult<
  GetLocationsDimensionQuery,
  GetLocationsDimensionQueryVariables
>;
