import React, { useState } from 'react';
import {
  useGetCharactersNameQuery,
  useGetCharactersSpeciesQuery,
} from 'src/graphql/generated/graphql';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { useNavigation } from 'src/navigation/routes';
import { HeaderFilter, ButtonApply, ButtonClear, Radio, Search } from 'src/ui';
import { getValues } from 'src/utils/getValues';
import { Container, Inner } from './style';

export const CharacterFilter = () => {
  const { species, status, gender, name } = useSelector(
    state => state.character
  );
  const { applyCharacter, clearCharacter } = useActions();
  const [valueName, setValueName] = useState(name);
  const [valueSpecies, setValueSpecies] = useState(species);
  const [filter, setFilter] = useState({ name, status, gender, species });
  const nameQuery = useGetCharactersNameQuery({
    variables: { name: valueName },
  });
  const speciesQuery = useGetCharactersSpeciesQuery({
    variables: { species: valueSpecies },
  });
  const { goBack } = useNavigation();
  const handleApply = () => {
    applyCharacter(filter);
    goBack();
  };
  const handleClear = () => {
    clearCharacter();
    goBack();
  };
  const handleSearch = (value: string) => {
    if (value === filter.name) {
      setFilter({ ...filter, name: '' });
    } else {
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
      setFilter({ ...filter, species: '' });
    } else {
      setFilter({ ...filter, species: value });
    }
  };
  return (
    <Container>
      <Inner>
        <HeaderFilter
          title={'Filter'}
          right={<ButtonApply onApply={handleApply} />}
          left={<ButtonClear onClear={handleClear} />}
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
          options={['Alive', 'Dead', 'Unknown']}
          title={'Status'}
          selected={filter.status}
          onChangeSelect={handleStatus}
        />
        <Radio
          options={['Female', 'Male', 'Genderless', 'Unknown']}
          title={'Gender'}
          selected={filter.gender}
          onChangeSelect={handleGender}
        />
      </Inner>
    </Container>
  );
};
