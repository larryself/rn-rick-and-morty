enum Episode {
  'CLEAR_EPISODE' = 'CLEAR_EPISODE',
  'APPLY_EPISODE' = 'APPLY_EPISODE',
}

interface EpisodeState {
  name: string;
  episode: string;
}

const initialState: EpisodeState = {
  name: '',
  episode: '',
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
      return { name: '', episode: '' };

    default:
      return state;
  }
};
