import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
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
  Upload: never;
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

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  type: InputMaybe<Scalars['String']>;
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

export type Locations = {
  __typename?: 'Locations';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  character: Maybe<Character>;
  characters: Maybe<Characters>;
  charactersByIds: Maybe<Array<Maybe<Character>>>;
  episode: Maybe<Episode>;
  episodes: Maybe<Episodes>;
  episodesByIds: Maybe<Array<Maybe<Episode>>>;
  location: Maybe<Location>;
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

export type QueryLocationArgs = {
  id: Scalars['ID'];
};

export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>;
  page: InputMaybe<Scalars['Int']>;
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

export type CharactersFragment = {
  __typename?: 'Character';
  id: string;
  name: string;
  status: string;
  image: string;
};

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

export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options,
  );
}

export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options,
  );
}

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

export function useGetCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options,
  );
}

export function useGetCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options,
  );
}

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

export function useGetCharactersNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >,
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
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >(GetCharactersNameDocument, options);
}

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

export function useGetCharactersSpeciesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >,
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
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >(GetCharactersSpeciesDocument, options);
}

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

export function useGetEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options,
  );
}

export function useGetEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesQuery,
    GetEpisodesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(
    GetEpisodesDocument,
    options,
  );
}

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

export function useGetEpisodeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEpisodeQuery,
    GetEpisodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(
    GetEpisodeDocument,
    options,
  );
}

export function useGetEpisodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodeQuery,
    GetEpisodeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(
    GetEpisodeDocument,
    options,
  );
}

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

export function useGetEpisodesNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEpisodesNameQuery,
    GetEpisodesNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetEpisodesNameQuery, GetEpisodesNameQueryVariables>(
    GetEpisodesNameDocument,
    options,
  );
}

export function useGetEpisodesNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEpisodesNameQuery,
    GetEpisodesNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetEpisodesNameQuery,
    GetEpisodesNameQueryVariables
  >(GetEpisodesNameDocument, options);
}

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

export function useGetLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options,
  );
}

export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsQuery,
    GetLocationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetLocationsQuery, GetLocationsQueryVariables>(
    GetLocationsDocument,
    options,
  );
}

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

export function useGetLocationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}

export function useGetLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationQuery,
    GetLocationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<GetLocationQuery, GetLocationQueryVariables>(
    GetLocationDocument,
    options,
  );
}

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

export function useGetLocationsNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsNameQuery,
    GetLocationsNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetLocationsNameQuery, GetLocationsNameQueryVariables>(
    GetLocationsNameDocument,
    options,
  );
}

export function useGetLocationsNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsNameQuery,
    GetLocationsNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetLocationsNameQuery,
    GetLocationsNameQueryVariables
  >(GetLocationsNameDocument, options);
}
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

export function useGetLocationsTypeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsTypeQuery,
    GetLocationsTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useQuery<GetLocationsTypeQuery, GetLocationsTypeQueryVariables>(
    GetLocationsTypeDocument,
    options,
  );
}

export function useGetLocationsTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsTypeQuery,
    GetLocationsTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetLocationsTypeQuery,
    GetLocationsTypeQueryVariables
  >(GetLocationsTypeDocument, options);
}

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

export function useGetLocationsDimensionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLocationsDimensionQuery,
    GetLocationsDimensionQueryVariables
  >,
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
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useLazyQuery<
    GetLocationsDimensionQuery,
    GetLocationsDimensionQueryVariables
  >(GetLocationsDimensionDocument, options);
}
