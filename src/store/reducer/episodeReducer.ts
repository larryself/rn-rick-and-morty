enum Episode {
  'SET_NAME_EPISODE' = 'SET_NAME_EPISODE',
  'SET_SEASON' = 'SET_SEASON',
  'CLEAR_EPISODE' = 'CLEAR_EPISODE',
  'APPLY_EPISODE' = 'APPLY_EPISODE',
}

interface EpisodeState {
  name: string;
  season: string;
  apply_filter: boolean;
}

const initialState: EpisodeState = {
  name: '',
  season: '',
  apply_filter: false,
};

interface EpisodeAction {
  type: string;
  payload: string;
}

export const episodeReducer = (
  state = initialState,
  action: EpisodeAction
): EpisodeState => {
  switch (action.type) {
    case Episode.SET_NAME_EPISODE:
      return { ...state, name: action.payload };

    case Episode.SET_SEASON:
      return { ...state, season: action.payload };

    case Episode.APPLY_EPISODE:
      return { ...state, apply_filter: true };

    case Episode.CLEAR_EPISODE:
      return { name: '', season: '', apply_filter: false };

    default:
      return state;
  }
};
