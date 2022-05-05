import { Dispatch } from 'react';

import { CharacterAction, CharacterActionTypes, LocationAction, LocationActionTypes } from '../types';

export const setNameLocation =
  (type: string, name: string) => (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.SET_NAME_LOCATION,
      payload: name,
    });
  };

export const setType =
  (type: string) => (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.SET_TYPE,
      payload: type,
    });
  };

export const setDimension =
  (dimension: string) => (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.SET_DIMENSION,
      payload: dimension,
    });
  };

export const applyLocation= () => (dispatch: Dispatch<LocationAction>) => {
  dispatch({
    type: LocationActionTypes.APPLY_LOCATION,
  })
};

export const clearLocation = () => (dispatch: Dispatch<LocationAction>) => {
  dispatch({
    type: LocationActionTypes.CLEAR_LOCATION,
  });
};
