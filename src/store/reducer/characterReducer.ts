enum Character {
  'SET_NAME_CHARACTER' = 'SET_NAME_CHARACTER',
  'SET_SPECIES' = 'SET_SPECIES',
  'SET_STATUS' = 'SET_STATUS',
  'SET_GENDER' = 'SET_GENDER',
  'CLEAR_CHARACTER' = 'CLEAR_CHARACTER',
  'APPLY_CHARACTER' = 'APPLY_CHARACTER',
}

interface CharacterState {
  name: string;
  species: string;
  status: string;
  gender: string;
  apply_filter: boolean;
}

const initialState: CharacterState = {
  name: '',
  species: '',
  status: '',
  gender: '',
  apply_filter: false,
};

interface CharacterAction {
  type: string;
  payload: string;
}

export const characterReducer = (
  state = initialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case Character.SET_NAME_CHARACTER:
      return { ...state, name: action.payload };

    case Character.SET_SPECIES:
      return { ...state, species: action.payload };

    case Character.SET_STATUS:
      return { ...state, status: action.payload };

    case Character.SET_GENDER:
      return { ...state, gender: action.payload };

    case Character.APPLY_CHARACTER:
      return { ...state, apply_filter: true };

    case Character.CLEAR_CHARACTER:
      return {
        name: '',
        species: '',
        status: '',
        gender: '',
        apply_filter: false,
      };

    default:
      return state;
  }
};
