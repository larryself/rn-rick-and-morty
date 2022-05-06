import { gql, useQuery } from '@apollo/client';
import {
  CharacterField,
  CharactersField,
  EpisodesField,
  LocationsField,
} from 'src/modules/graphql/fragments';

const CHARACTERS = gql`
  ${CharactersField}
  query getCharacters(
    $name: String
    $species: String
    $gender: String
    $status: String
  ) {
    characters(
      filter: {
        name: $name
        species: $species
        gender: $gender
        status: $status
      }
    ) {
      results {
        ...characters
      }
    }
  }
`;

const CHARACTER = gql`
  ${CharacterField}
  ${EpisodesField}
  ${LocationsField}
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
`;

export const useCharactersQuery = (
  name = '',
  status = '',
  gender = '',
  species = ''
) => {
  return useQuery(CHARACTERS, { variables: { name, status, gender, species } });
};

export const useCharacterByIDQuery = (id: string) => {
  return useQuery(CHARACTER, { variables: { id } });
};
