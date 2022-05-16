import { Dispatch } from 'react';

import { EpisodeAction, EpisodeActionTypes } from '../types';

export const setNameEpisode =
  (name: string) => (dispatch: Dispatch<EpisodeAction>) => {
    dispatch({
      type: EpisodeActionTypes.SET_NAME_EPISODE,
      payload: name,
    });
  };

export const setSeason =
  (season: string) => (dispatch: Dispatch<EpisodeAction>) => {
    dispatch({
      type: EpisodeActionTypes.SET_SEASON,
      payload: season,
    });
  };

export const applyEpisode = () => (dispatch: Dispatch<EpisodeAction>) => {
  dispatch({
    type: EpisodeActionTypes.APPLY_EPISODE,
  });
};

export const clearEpisode = () => (dispatch: Dispatch<EpisodeAction>) => {
  dispatch({
    type: EpisodeActionTypes.CLEAR_EPISODE,
  });
};
