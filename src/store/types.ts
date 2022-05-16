export enum CharacterActionTypes {
  SET_NAME_CHARACTER = 'SET_NAME_CHARACTER',
  SET_SPECIES = 'SET_SPECIES',
  SET_STATUS = 'SET_STATUS',
  SET_GENDER = 'SET_GENDER',
  CLEAR_CHARACTER = 'CLEAR_CHARACTER',
  APPLY_CHARACTER = 'APPLY_CHARACTER',
}

export interface CharacterAction {
  type: string;
  payload?: string;
}

export enum LocationActionTypes {
  SET_NAME_LOCATION = 'SET_NAME_LOCATION',
  SET_TYPE = 'SET_TYPE',
  SET_DIMENSION = 'SET_DIMENSION',
  CLEAR_LOCATION = 'CLEAR_LOCATION',
  APPLY_LOCATION = 'APPLY_LOCATION',
}

export interface LocationAction {
  type: string;
  payload?: string;
}

export enum EpisodeActionTypes {
  SET_NAME_EPISODE = 'SET_NAME_EPISODE',
  SET_SEASON = 'SET_SEASON',
  CLEAR_EPISODE = 'CLEAR_EPISODE',
  APPLY_EPISODE = 'APPLY_EPISODE',
}

export interface EpisodeAction {
  type: string;
  payload?: string;
}
