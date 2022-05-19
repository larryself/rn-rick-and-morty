import { Dispatch } from 'react';

import { LocationAction, LocationActionTypes } from '../types';

export const applyLocation =
  (filter: { dimension: string; type: string; name: string }) =>
  (dispatch: Dispatch<LocationAction>) => {
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
