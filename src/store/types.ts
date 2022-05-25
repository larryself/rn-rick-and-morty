import { CharacterState } from 'src/store/reducer/characterReducer';
import { EpisodeState } from 'src/store/reducer/episodeReducer';
import { LocationState } from 'src/store/reducer/locationReducer';

export enum CharacterActionTypes {
  CLEAR_CHARACTER = 'CLEAR_CHARACTER',
  APPLY_CHARACTER = 'APPLY_CHARACTER',
}

export interface CharacterAction {
  type: string;
  payload?: CharacterState;
}

export enum LocationActionTypes {
  CLEAR_LOCATION = 'CLEAR_LOCATION',
  APPLY_LOCATION = 'APPLY_LOCATION',
}

export interface LocationAction {
  type: string;
  payload?: LocationState;
}

export enum EpisodeActionTypes {
  CLEAR_EPISODE = 'CLEAR_EPISODE',
  APPLY_EPISODE = 'APPLY_EPISODE',
}

export interface EpisodeAction {
  type: string;
  payload?: EpisodeState;
}
