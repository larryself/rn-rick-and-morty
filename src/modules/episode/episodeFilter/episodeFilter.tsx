import React, { useState } from 'react';

import { useEpisodeFilter } from 'src/graphql/client/episodeFilter';
import { useGetEpisodesNameQuery } from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { ButtonClear, ButtonOval, HeaderFilter, Search, Select } from 'src/ui';
import { fields, getValues } from 'src/utils';

import { Container } from './style';

export const EpisodeFilter = () => {
  const {
    filter: { name, episode },
    clearFilter,
    editFilter,
  } = useEpisodeFilter();
  const [searchName, setSearchName] = useState(name);
  const [filter, setFilter] = useState({ name, episode });
  const { data } = useGetEpisodesNameQuery({
    variables: { name: searchName },
  });
  const isEmpty = Object.values(filter).join('');
  const episodes = data?.episodes.results;
  const { goBack } = useNavigation();

  const handleApply = () => {
    editFilter(filter);
    goBack();
  };

  const handleClear = () => {
    setFilter({ name: '', episode: '' });
    clearFilter();
  };

  const handleSearch = (value: string) => {
    if (value === filter.name) {
      setSearchName('');
      setFilter({ ...filter, name: '' });
    } else {
      setSearchName(value);
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
        right={<ButtonOval onPress={handleApply} title={'Apply'} />}
        left={
          !!isEmpty && <ButtonClear onPress={handleClear} title={'Clear'} />
        }
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
        types={fields.Season}
      />
    </Container>
  );
};
