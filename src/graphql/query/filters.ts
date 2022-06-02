import { gql } from '@apollo/client';
export const CharacterFilter = gql`
  fragment characterFilter on CharacterFilter {
    name
    status
    gender
    species
  }
`;
export const LocationFilter = gql`
  fragment locationFilter on LocationFilter {
    name
    type
    dimension
  }
`;
export const EpisodeFilter = gql`
  fragment episodeFilter on EpisodeFilter {
    name
    episode
  }
`;

export const GET_FILTERS = gql`
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
export const GET_FILTER_CHARACTER = gql`
  query getFilterCharacters {
    characterFilter {
      name
      status
      gender
      species
    }
  }
`;
export const GET_FILTER_LOCATION = gql`
  query getFilterLocations {
    locationFilter @client {
      name
      type
      dimension
    }
  }
`;
export const GET_FILTER_EPISODE = gql`
  query getFilterEpisode {
    episodeFilter {
      name
      episode
    }
  }
`;
export const EDIT_FILTER_CHARACTER = gql`
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
export const EDIT_FILTER_EPISODE = gql`
  mutation episodeFilter($name: String, $episode: String) {
    episodeFilter(name: $name, episode: $episode) @client
  }
`;
export const EDIT_FILTER_LOCATION = gql`
  mutation locationFilter($name: String, $type: String, $dimension: String) {
    locationFilter(name: $name, type: $type, dimension: $dimension) @client
  }
`;
