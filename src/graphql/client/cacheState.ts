import { gql } from '@apollo/client';
import { cache } from 'src/graphql/client/cache';
export function initialState() {
  cache.writeQuery({
    query: gql`
      query Filter {
        characterFilter {
          name
          gender
          species
          status
        }
        locationFilter {
          name
          type
          dimension
        }
        episodeFilter {
          name
          episode
        }
      }
    `,
    data: {
      characterFilter: {
        status: '',
        gender: '',
        name: '',
        species: '',
      },
      locationFilter: {
        name: '',
        type: '',
        dimension: '',
      },
      episodeFilter: {
        name: '',
        episode: '',
      },
    },
  });
}
