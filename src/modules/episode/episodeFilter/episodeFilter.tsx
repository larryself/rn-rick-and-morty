import React from 'react';
import { useEpisodesQuery } from 'src/modules/graphql/episodes';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { Search, Select } from 'src/ui';

import { Container } from './style';

export const EpisodeFilter = () => {
  const { name, episode } = useSelector(state => state.episode);
  const { data } = useEpisodesQuery();
  const { setEpisode } = useActions();
  const episodeSelect = (value: string) => {
    if (value !== episode) {
      setEpisode(value);
    } else {
      setEpisode('');
    }
  };
  return (
    <Container>
      <Search title={'Name'} guide={'Give a name'} />
      <Select
        title={'Season'}
        guide={'Select one'}
        onSelect={episodeSelect}
        selected={episode}
        types={['Season 1', 'Season 2', 'Season 3']}
      />
    </Container>
  );
};
