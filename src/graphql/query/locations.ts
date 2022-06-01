import { gql } from '@apollo/client';
import {
  CharactersField,
  InfoField,
  LocationsField,
} from 'src/graphql/fragments/fragments';

export const LOCATIONS = gql`
  ${LocationsField}
  ${InfoField}
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
`;

export const LOCATION = gql`
  ${CharactersField}
  ${LocationsField}
  query getLocation($id: ID!) {
    location(id: $id) {
      ...locations
      residents {
        ...characters
      }
    }
  }
`;
export const LOCATION_NAME = gql`
  query getLocationsName($name: String) {
    locations(filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;
export const LOCATION_TYPE = gql`
  query getLocationsTYPE($type: String) {
    locations(filter: { type: $type }) {
      results {
        id
        type
      }
    }
  }
`;
export const LOCATION_DIMENSION = gql`
  query getLocationsDimension($dimension: String) {
    locations(filter: { dimension: $dimension }) {
      results {
        id
        dimension
      }
    }
  }
`;
