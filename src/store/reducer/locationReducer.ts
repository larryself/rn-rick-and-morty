enum Location {
  'SET_NAME_LOCATION' = 'SET_NAME_LOCATION',
  'SET_TYPE' = 'SET_TYPE',
  'SET_DIMENSION' = 'SET_DIMENSION',
  'CLEAR_LOCATION' = 'CLEAR_LOCATION',
  'APPLY_LOCATION' = 'APPLY_LOCATION',
}

interface LocationState {
  name: string;
  dimension: string;
  type: string;
  apply_filter: boolean;
}

const initialState: LocationState = {
  name: '',
  type: '',
  dimension: '',
  apply_filter: false,
};

interface LocationAction {
  type: string;
  payload: string;
}

export const locationReducer = (
  state = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case Location.SET_NAME_LOCATION:
      return { ...state, name: action.payload };

    case Location.SET_TYPE:
      return { ...state, type: action.payload };

    case Location.SET_DIMENSION:
      return { ...state, dimension: action.payload };

    case Location.APPLY_LOCATION:
      return { ...state, apply_filter: true };

    case Location.CLEAR_LOCATION:
      return { name: '', type: '', dimension: '', apply_filter: false };

    default:
      return state;
  }
};
