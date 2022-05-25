enum Character {
  'CLEAR_CHARACTER' = 'CLEAR_CHARACTER',
  'APPLY_CHARACTER' = 'APPLY_CHARACTER',
}

export interface CharacterState {
  name: string;
  species: string;
  status: string;
  gender: string;
}

const initialState: CharacterState = {
  name: '',
  species: '',
  status: '',
  gender: '',
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
        name: '',
        species: '',
        status: '',
        gender: '',
      };

    default:
      return state;
  }
};
