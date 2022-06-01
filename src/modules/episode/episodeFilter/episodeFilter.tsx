import React, { useState } from 'react';
import { useGetEpisodesNameQuery } from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { ButtonOval, Search, Select, HeaderFilter, ButtonClear } from 'src/ui';
import { getValues } from 'src/utils/getValues';
import { Container } from './style';

export const EpisodeFilter = () => {
  const { name, episode } = useSelector(state => state.episode);
  const { applyEpisode, clearEpisode } = useActions();
  const [searchName, setSearchName] = useState(name || '');
  const [filter, setFilter] = useState({ name, episode });
  const { data } = useGetEpisodesNameQuery({
    variables: { name: searchName },
  });
  const isEmpty = Object.values(filter).join('');
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
      setFilter({ ...filter, name: null });
    } else {
      setFilter({ ...filter, name: value });
    }
  };
  const seasonSelect = (value: string) => {
    if (value === filter.episode) {
      setFilter({ ...filter, episode: null });
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
        types={['S01', 'S02', 'S03', 'S04', 'S05']}
      />
    </Container>
  );
};
