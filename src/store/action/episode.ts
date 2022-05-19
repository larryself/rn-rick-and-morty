import { Dispatch } from 'react';

import { EpisodeAction, EpisodeActionTypes } from '../types';

export const applyEpisode =
  (filter: { episode: string; name: string }) =>
  (dispatch: Dispatch<EpisodeAction>) => {
    dispatch({
      type: EpisodeActionTypes.APPLY_EPISODE,
      payload: filter,
    });
  };

export const clearEpisode = () => (dispatch: Dispatch<EpisodeAction>) => {
  dispatch({
    type: EpisodeActionTypes.CLEAR_EPISODE,
  });
};
