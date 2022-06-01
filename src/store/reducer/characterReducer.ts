enum Character {
  'CLEAR_CHARACTER' = 'CLEAR_CHARACTER',
  'APPLY_CHARACTER' = 'APPLY_CHARACTER',
}

export interface CharacterState {
  name: string | null;
  species: string | null;
  status: string | null;
  gender: string | null;
}

export const initialState: CharacterState = {
  name: null,
  species: null,
  status: null,
  gender: null,
};

interface CharacterAction {
  type: string;
  payload: CharacterState;
}

export const characterReducer = (
  state = initialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case Character.APPLY_CHARACTER:
      return { ...state, ...action.payload };

    case Character.CLEAR_CHARACTER:
      return {
        name: null,
        species: null,
        status: null,
        gender: null,
      };

    default:
      return state;
  }
};
