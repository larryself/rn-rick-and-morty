import { Dispatch } from 'react';
import { CharacterState } from 'src/store/reducer/characterReducer';

import { CharacterAction, CharacterActionTypes } from '../types';

export const applyCharacter =
  (filter: CharacterState) => (dispatch: Dispatch<CharacterAction>) => {
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
