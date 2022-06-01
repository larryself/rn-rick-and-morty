enum Location {
  'CLEAR_LOCATION' = 'CLEAR_LOCATION',
  'APPLY_LOCATION' = 'APPLY_LOCATION',
}

export interface LocationState {
  name: string | null;
  dimension: string | null;
  type: string | null;
}

const initialState: LocationState = {
  name: null,
  type: null,
  dimension: null,
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
      return { name: null, type: null, dimension: null };

    default:
      return state;
  }
};
