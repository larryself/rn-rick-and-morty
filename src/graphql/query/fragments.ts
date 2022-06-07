import { gql } from '@apollo/client';

export const CharactersField = gql`
  fragment characters on Character {
    id
    name
    status
    image
  }
`;

export const InfoField = gql`
  fragment info on Info {
    pages
    next
  }
`;

export const CharacterField = gql`
  ${CharactersField}
  fragment character on Character {
    ...characters
    species
    type
    gender
  }
`;

export const EpisodesField = gql`
  fragment episodes on Episode {
    id
    air_date
    name
    episode
  }
`;

export const LocationsField = gql`
  fragment locations on Location {
    id
    type
    name
    dimension
  }
`;
