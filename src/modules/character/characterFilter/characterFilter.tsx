import React, { useState } from 'react';

import { useCharacterFilter } from 'src/graphql/client/characterFilter';
import {
  useGetCharactersNameQuery,
  useGetCharactersSpeciesQuery,
} from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { ButtonClear, ButtonOval, HeaderDetailed, Radio, Search } from 'src/ui';
import { fields, getValues } from 'src/utils';

import { Container, Inner } from './style';

export const CharacterFilter = () => {
  const {
    filter: { name, species, status, gender },
    clearFilter,
    editFilter,
  } = useCharacterFilter();
  const [valueName, setValueName] = useState(name);
  const [valueSpecies, setValueSpecies] = useState(species);
  const [filter, setFilter] = useState({ name, status, species, gender });
  const isEmpty = Object.values(filter).join('');
  const nameQuery = useGetCharactersNameQuery({
    variables: { name: valueName },
  });
  const speciesQuery = useGetCharactersSpeciesQuery({
    variables: { species: valueSpecies },
  });
  const { goBack } = useNavigation();

  const handleApply = () => {
    editFilter(filter);
    goBack();
  };

  const handleClear = () => {
    setFilter({ name: '', gender: '', species: '', status: '' });
    clearFilter();
  };

  const handleSearch = (value: string) => {
    if (value === filter.name) {
      setValueName('');
      setFilter({ ...filter, name: '' });
    } else {
      setValueName(value);
      setFilter({ ...filter, name: value });
    }
  };

  const handleStatus = (value: string) => {
    if (value === filter.status) {
      setFilter({ ...filter, status: '' });
    } else {
      setFilter({ ...filter, status: value });
    }
  };

  const handleGender = (value: string) => {
    if (value === filter.gender) {
      setFilter({ ...filter, gender: '' });
    } else {
      setFilter({ ...filter, gender: value });
    }
  };

  const handleSpecies = (value: string) => {
    if (value === filter.species) {
      setValueSpecies('');
      setFilter({ ...filter, species: '' });
    } else {
      setValueSpecies(value);
      setFilter({ ...filter, species: value });
    }
  };

  return (
    <Container>
      <Inner>
        <HeaderDetailed
          title={'Filter'}
          right={<ButtonOval onPress={handleApply} title={'Apply'} />}
          left={
            !!isEmpty && <ButtonClear onPress={handleClear} title={'Clear'} />
          }
        />
        <Search
          title={'Name'}
          guide={'Give a name'}
          selected={filter.name}
          onSelect={handleSearch}
          list={getValues(nameQuery.data?.characters.results, 'name')}
          value={valueName}
          setValue={setValueName}
        />
        <Search
          title={'Species'}
          guide={'Give a species'}
          selected={filter.species}
          onSelect={handleSpecies}
          list={getValues(speciesQuery.data?.characters.results, 'species')}
          value={valueSpecies}
          setValue={setValueSpecies}
        />
        <Radio
          options={fields.Status}
          title={'Status'}
          selected={filter.status}
          onChangeSelect={handleStatus}
        />
        <Radio
          options={fields.Gender}
          title={'Gender'}
          selected={filter.gender}
          onChangeSelect={handleGender}
        />
      </Inner>
    </Container>
  );
};
