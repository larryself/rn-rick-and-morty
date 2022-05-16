import { Dispatch } from 'react';

import { CharacterAction, CharacterActionTypes } from '../types';

export const setNameCharacter =
  (name: string) => (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.SET_NAME_CHARACTER,
      payload: name,
    });
  };

export const setSpecies =
  (species: string) => (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.SET_SPECIES,
      payload: species,
    });
  };

export const setStatus =
  (status: string) => (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.SET_STATUS,
      payload: status,
    });
  };

export const setGender =
  (gender: string) => (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.SET_GENDER,
      payload: gender,
    });
  };

export const applyCharacter = () => (dispatch: Dispatch<CharacterAction>) => {
  dispatch({
    type: CharacterActionTypes.APPLY_CHARACTER,
  });
};

export const clearCharacter = () => (dispatch: Dispatch<CharacterAction>) => {
  dispatch({
    type: CharacterActionTypes.CLEAR_CHARACTER,
  });
};
