import { gql, useQuery } from '@apollo/client';
import { CharactersField, EpisodesField } from 'src/modules/graphql/fragments';

const EPISODES = gql`
  ${EpisodesField}
  query getEpisodes {
    episodes {
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

export const useEpisodesQuery = () => {
  return useQuery(EPISODES);
};

export const useEpisodeByIDQuery = (id: string) => {
  return useQuery(EPISODE, { variables: { id } });
};
