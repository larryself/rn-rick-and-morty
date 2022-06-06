import { makeVar, useReactiveVar } from '@apollo/client';

type LocationFilter = {
  name: string;
  type: string;
  dimension: string;
};

export function makeLocationFilter(
  value: Partial<LocationFilter>,
): LocationFilter {
  return {
    name: '',
    type: '',
    dimension: '',
    ...value,
  };
}

export const LocationFilterVar = makeVar<LocationFilter>(
  makeLocationFilter({}),
);

export const useLocationFilter = () => {
  const filter = useReactiveVar(LocationFilterVar);
  const editFilter = (value: Partial<LocationFilter>) =>
    LocationFilterVar(makeLocationFilter(value));
  const clearFilter = () => LocationFilterVar(makeLocationFilter({}));

  return { filter, clearFilter, editFilter };
};
