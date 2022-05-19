import { Dispatch } from 'react';

import { CharacterAction, CharacterActionTypes } from '../types';

export const applyCharacter =
  (filter: { name: string; status: string; species: string; gender: string }) =>
  (dispatch: Dispatch<CharacterAction>) => {
    dispatch({
      type: CharacterActionTypes.APPLY_CHARACTER,
      payload: filter,
    });
  };

export const clearCharacter = () => (dispatch: Dispatch<CharacterAction>) => {
  dispatch({
    type: CharacterActionTypes.CLEAR_CHARACTER,
  });
};
