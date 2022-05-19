import React, { useState } from 'react';
import { useGetEpisodesNameQuery } from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { ButtonApply, ButtonClear, Search, Select } from 'src/ui';
import { HeaderFilter } from 'src/ui/headerFilter/headerFilter';

import { Container } from './style';

export const EpisodeFilter = () => {
  const { name, episode } = useSelector(state => state.episode);
  const { applyEpisode, clearEpisode } = useActions();
  const [searchName, setSearchName] = useState(name);
  const [filter, setFilter] = useState({ name, episode });
  const { data, loading } = useGetEpisodesNameQuery({
    variables: { name: searchName },
  });
  const episodes = data?.episodes.results;
  const { goBack } = useNavigation();
  const handleApply = () => {
    applyEpisode(filter);
    goBack();
  };
  const handleClear = () => {
    clearEpisode();
    goBack();
  };

  const handleSearch = (value: string) => {
    if (value === filter.name) {
      setFilter({ ...filter, name: '' });
    } else {
      setFilter({ ...filter, name: value });
    }
  };
  const seasonSelect = (value: string) => {
    if (value === filter.episode) {
      setFilter({ ...filter, episode: '' });
    } else {
      setFilter({ ...filter, episode: value });
    }
  };

  return (
    <Container>
      <HeaderFilter
        title={'Filter'}
        right={<ButtonApply onApply={handleApply} />}
        left={<ButtonClear onClear={handleClear} />}
      />
      <Search
        title={'Name'}
        guide={'Give a name'}
        list={getValues(episodes, 'name')}
        selected={filter.name}
        onSelect={handleSearch}
        setValue={setSearchName}
        value={searchName}
      />
      <Select
        title={'Season'}
        guide={'Select one'}
        onSelect={seasonSelect}
        selected={filter.episode}
        types={['S01', 'S02', 'S03', 'S04', 'S05']}
      />
    </Container>
  );
};
