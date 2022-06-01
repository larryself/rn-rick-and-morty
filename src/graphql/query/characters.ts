import { gql } from '@apollo/client';
import {
  CharacterField,
  CharactersField,
  EpisodesField,
  InfoField,
  LocationsField,
} from 'src/graphql/fragments/fragments';

export const CHARACTERS = gql`
  ${CharactersField}
  ${InfoField}
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
`;

export const CHARACTER = gql`
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

export const CHARACTERS_NAME = gql`
  query getCharactersName($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;

export const CHARACTERS_SPECIES = gql`
  query getCharactersSpecies($species: String) {
    characters(filter: { species: $species }) {
      results {
        id
        species
      }
    }
  }
`;
