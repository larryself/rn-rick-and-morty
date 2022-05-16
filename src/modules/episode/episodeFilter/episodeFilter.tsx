import React from 'react';
import { useGetEpisodesNameQuery } from 'src/graphql/generated/graphql';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { Loader, Search, Select } from 'src/ui';

import { Container } from './style';

export const EpisodeFilter = () => {
  const { name, season } = useSelector(state => state.episode);
  const { data, loading } = useGetEpisodesNameQuery({
    variables: { name },
  });
  const episodes = data?.episodes.results;
  const { setSeason, setNameEpisode } = useActions();
  const seasonSelect = (value: string) => {
    if (value !== season) {
      setSeason(value);
    } else {
      setSeason('');
    }
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Search
        title={'Name'}
        guide={'Give a name'}
        list={episodes}
        selected={name}
        select={setNameEpisode}
      />
      <Select
        title={'Season'}
        guide={'Select one'}
        onSelect={seasonSelect}
        selected={season}
        types={['S01', 'S02', 'S03', 'S04', 'S05']}
      />
    </Container>
  );
};
