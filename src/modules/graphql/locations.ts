import { gql, useQuery } from '@apollo/client';
import { CharactersField, LocationsField } from 'src/modules/graphql/fragments';

const LOCATIONS = gql`
  ${LocationsField}
  query getLocations($name: String, $type: String, $dimension: String) {
    locations(filter: { name: $name, type: $type, dimension: $dimension }) {
      results {
        ...locations
      }
    }
  }
`;

const LOCATION = gql`
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

export const useLocationsQuery = (name = '', type = '', dimension = '') => {
  return useQuery(LOCATIONS, { variables: { name, type, dimension } });
};

export const useLocationByIDQuery = (id: string) => {
  return useQuery(LOCATION, { variables: { id } });
};
