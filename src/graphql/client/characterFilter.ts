import { makeVar, useReactiveVar } from '@apollo/client';

type CharacterFilter = {
  name: string;
  gender: string;
  status: string;
  species: string;
};
export function makeCharacterFilter(
  value: Partial<CharacterFilter>
): CharacterFilter {
  return {
    name: '',
    gender: '',
    status: '',
    species: '',
    ...value,
  };
}

export const CharacterFilterVar = makeVar<CharacterFilter>(
  makeCharacterFilter({})
);

export const useCharacterFilter = () => {
  const filter = useReactiveVar(CharacterFilterVar);
  const editFilter = (value: Partial<CharacterFilter>) =>
    CharacterFilterVar(makeCharacterFilter(value));
  const clearFilter = () => CharacterFilterVar(makeCharacterFilter({}));

  return { filter, clearFilter, editFilter };
};
