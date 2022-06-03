import React, { useState } from 'react';
import { useLocationFilter } from 'src/graphql/client/locationFilter';
import {
  useGetLocationsDimensionQuery,
  useGetLocationsNameQuery,
  useGetLocationsTypeQuery,
} from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { HeaderFilter, ButtonOval, Search, ButtonClear } from 'src/ui';
import { getValues } from 'src/utils/getValues';
import { Container } from './style';

export const LocationFilter = () => {
  const {
    filter: { name, type, dimension },
    clearFilter,
    editFilter,
  } = useLocationFilter();
  const [valueName, setValueName] = useState(name);
  const [valueType, setValueType] = useState(type);
  const [valueDimension, setValueDimension] = useState(dimension);
  const [filter, setFilter] = useState({ name, type, dimension });
  const isEmpty = Object.values(filter).join('');
  const nameQuery = useGetLocationsNameQuery({
    variables: { name: valueName },
  });
  const typeQuery = useGetLocationsTypeQuery({
    variables: { type: valueType },
  });
  const dimensionQuery = useGetLocationsDimensionQuery({
    variables: { dimension: valueDimension },
  });
  const { goBack } = useNavigation();

  const handleApply = () => {
    editFilter(filter);
    goBack();
  };
  const handleClear = () => {
    setFilter({ name: '', type: '', dimension: '' });
    clearFilter();
  };
  const handleType = (value: string) => {
    if (value === filter.type) {
      setValueType('');
      setFilter({ ...filter, type: '' });
    } else {
      setValueType(value);
      setFilter({ ...filter, type: value });
    }
  };

  const handleDimension = (value: string) => {
    if (value === filter.dimension) {
      setValueDimension('');
      setFilter({ ...filter, dimension: '' });
    } else {
      setValueDimension(value);
      setFilter({ ...filter, dimension: value });
    }
  };

  const handleName = (value: string) => {
    if (value === filter.name) {
      setValueName('');
      setFilter({ ...filter, name: '' });
    } else {
      setValueName(value);
      setFilter({ ...filter, name: value });
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
        selected={filter.name}
        onSelect={handleName}
        list={getValues(nameQuery.data?.locations.results, 'name')}
        setValue={setValueName}
        value={valueName}
      />
      <Search
        title={'Type'}
        guide={'Give a type'}
        selected={filter.type}
        onSelect={handleType}
        list={getValues(typeQuery.data?.locations.results, 'type')}
        setValue={setValueType}
        value={valueType}
      />
      <Search
        title={'Dimension'}
        guide={'Give a dimension'}
        selected={filter.dimension}
        onSelect={handleDimension}
        list={getValues(dimensionQuery.data?.locations.results, 'dimension')}
        setValue={setValueDimension}
        value={valueDimension}
      />
    </Container>
  );
};
