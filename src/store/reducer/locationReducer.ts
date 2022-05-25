enum Location {
  'CLEAR_LOCATION' = 'CLEAR_LOCATION',
  'APPLY_LOCATION' = 'APPLY_LOCATION',
}

export interface LocationState {
  name: string;
  dimension: string;
  type: string;
}

const initialState: LocationState = {
  name: '',
  type: '',
  dimension: '',
};

interface LocationAction {
  type: string;
  payload: LocationState;
}

export const locationReducer = (
  state = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case Location.APPLY_LOCATION:
      return { ...state, ...action.payload };

    case Location.CLEAR_LOCATION:
      return { name: '', type: '', dimension: '' };

    default:
      return state;
  }
};
