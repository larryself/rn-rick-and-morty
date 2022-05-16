import { gql } from '@apollo/client';
import {
  CharactersField,
  EpisodesField,
  InfoField,
} from 'src/graphql/query/fragments';

const EPISODES = gql`
  ${EpisodesField}
  ${InfoField}
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
`;

const EPISODE = gql`
  ${EpisodesField}
  ${CharactersField}
  query getEpisode($id: ID!) {
    episode(id: $id) {
      ...episodes
      characters {
        ...characters
      }
    }
  }
`;
const EPISODES_NAME = gql`
  query getEpisodesName($name: String) {
    episodes(filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;
