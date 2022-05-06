import React from 'react';
import { useCharactersQuery } from 'src/modules/graphql/characters';
import { unique } from 'src/utils/unique';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { Radio, Search, Select } from 'src/ui';

import { Container, Inner } from './style';

export const CharacterFilter = () => {
  const { species, status, gender, name } = useSelector(
    state => state.character
  );
  const { setStatus, setGender, setSpecies } = useActions();
  const { data } = useCharactersQuery();
  const characters = data?.characters.results;
  console.log(
    'name',
    characters.map(character => character.name)
  );
  const handleStatus = (value: string) => {
    if (value !== status) {
      setStatus(value);
    } else {
      setStatus('');
    }
  };

  const handleGender = (value: string) => {
    if (value !== gender) {
      setGender(value);
    } else {
      setGender('');
    }
  };

  const speciesSelect = (value: string) => {
    if (value !== species) {
      setSpecies(value);
    } else {
      setSpecies('');
    }
  };

  return (
    <Container>
      <Inner>
        <Search
          title={'Name'}
          guide={'Give a name'}
          selected={name}
          list={characters.map(character => character.name)}
        />
        <Select
          title={'Species'}
          guide={'Select one'}
          onSelect={speciesSelect}
          selected={species}
          types={unique(characters, 'species')}
        />
        <Radio
          options={['Alive', 'Dead', 'Unknown']}
          title={'Status'}
          selected={status}
          onChangeSelect={(item: string) => handleStatus(item)}
        />
        <Radio
          options={['Female', 'Male', 'Genderless', 'Unknown']}
          title={'Gender'}
          selected={gender}
          onChangeSelect={(item: string) => handleGender(item)}
        />
      </Inner>
    </Container>
  );
};
