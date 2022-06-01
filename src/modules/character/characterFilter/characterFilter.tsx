import React, { useState } from 'react';
import {
  useGetCharactersNameQuery,
  useGetCharactersSpeciesQuery,
} from 'src/graphql/generated/graphql';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { useNavigation } from 'src/navigation/routes';
import { HeaderFilter, ButtonOval, Radio, Search, ButtonClear } from 'src/ui';
import { getValues } from 'src/utils/getValues';
import { Container, Inner } from './style';

export const CharacterFilter = () => {
  const characterFilter = useSelector(state => state.character);
  const { applyCharacter, clearCharacter } = useActions();
  const [valueName, setValueName] = useState(characterFilter.name || '');
  const [valueSpecies, setValueSpecies] = useState(
    characterFilter.species || ''
  );
  const [filter, setFilter] = useState(characterFilter);
  const isEmpty = Object.values(filter).join('');
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
      setFilter({ ...filter, name: null });
    } else {
      setFilter({ ...filter, name: value });
    }
  };

  const handleStatus = (value: string) => {
    if (value === filter.status) {
      setFilter({ ...filter, status: null });
    } else {
      setFilter({ ...filter, status: value });
    }
  };

  const handleGender = (value: string) => {
    if (value === filter.gender) {
      setFilter({ ...filter, gender: null });
    } else {
      setFilter({ ...filter, gender: value });
    }
  };
  const handleSpecies = (value: string) => {
    if (value === filter.species) {
      setFilter({ ...filter, species: null });
    } else {
      setFilter({ ...filter, species: value });
    }
  };
  return (
    <Container>
      <Inner>
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
