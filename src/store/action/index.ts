import * as CharacterAction from './character';
import * as EpisodeAction from './episode';
import * as LocationAction from './location';

export const Action = {
  ...EpisodeAction,
  ...LocationAction,
  ...CharacterAction,
};
