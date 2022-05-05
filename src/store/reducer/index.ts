import { combineReducers } from 'redux';

import { characterReducer } from './characterReducer';
import { episodeReducer } from './episodeReducer';
import { locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
  location: locationReducer,
  character: characterReducer,
  episode: episodeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
