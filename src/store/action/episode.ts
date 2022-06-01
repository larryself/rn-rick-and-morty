import { Dispatch } from 'react';
import { EpisodeState } from 'src/store/reducer/episodeReducer';

import { EpisodeAction, EpisodeActionTypes } from '../types';

export const applyEpisode =
  (filter: EpisodeState) => (dispatch: Dispatch<EpisodeAction>) => {
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
