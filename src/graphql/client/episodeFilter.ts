import { makeVar, useReactiveVar } from '@apollo/client';

type EpisodeFilter = {
  name: string;
  episode: string;
};

export function makeEpisodeFilter(
  value: Partial<EpisodeFilter>,
): EpisodeFilter {
  return {
    name: '',
    episode: '',
    ...value,
  };
}

export const EpisodeFilterVar = makeVar<EpisodeFilter>(makeEpisodeFilter({}));

export const useEpisodeFilter = () => {
  const filter = useReactiveVar(EpisodeFilterVar);
  const editFilter = (value: Partial<EpisodeFilter>) =>
    EpisodeFilterVar(makeEpisodeFilter(value));
  const clearFilter = () => EpisodeFilterVar(makeEpisodeFilter({}));

  return { filter, clearFilter, editFilter };
};
