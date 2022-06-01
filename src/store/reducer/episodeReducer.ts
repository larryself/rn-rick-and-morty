enum Episode {
  'CLEAR_EPISODE' = 'CLEAR_EPISODE',
  'APPLY_EPISODE' = 'APPLY_EPISODE',
}

export interface EpisodeState {
  name: string | null;
  episode: string | null;
}

const initialState: EpisodeState = {
  name: null,
  episode: null,
};

interface EpisodeAction {
  type: string;
  payload: EpisodeState;
}

export const episodeReducer = (
  state = initialState,
  action: EpisodeAction
): EpisodeState => {
  switch (action.type) {
    case Episode.APPLY_EPISODE:
      return { ...state, ...action.payload };

    case Episode.CLEAR_EPISODE:
      return { name: null, episode: null };

    default:
      return state;
  }
};
