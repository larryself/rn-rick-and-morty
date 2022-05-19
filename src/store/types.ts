export enum CharacterActionTypes {
  CLEAR_CHARACTER = 'CLEAR_CHARACTER',
  APPLY_CHARACTER = 'APPLY_CHARACTER',
}

export interface CharacterAction {
  type: string;
  payload?: {};
}

export enum LocationActionTypes {
  CLEAR_LOCATION = 'CLEAR_LOCATION',
  APPLY_LOCATION = 'APPLY_LOCATION',
}

export interface LocationAction {
  type: string;
  payload?: {};
}

export enum EpisodeActionTypes {
  CLEAR_EPISODE = 'CLEAR_EPISODE',
  APPLY_EPISODE = 'APPLY_EPISODE',
}

export interface EpisodeAction {
  type: string;
  payload?: {};
}
