import { Dispatch } from 'react';
import { LocationState } from 'src/store/reducer/locationReducer';

import { LocationAction, LocationActionTypes } from '../types';

export const applyLocation =
  (filter: LocationState) => (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.APPLY_LOCATION,
      payload: filter,
    });
  };

export const clearLocation = () => (dispatch: Dispatch<LocationAction>) => {
  dispatch({
    type: LocationActionTypes.CLEAR_LOCATION,
  });
};
