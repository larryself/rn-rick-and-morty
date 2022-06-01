import React, { useState } from 'react';
import {
  useGetLocationsDimensionQuery,
  useGetLocationsNameQuery,
  useGetLocationsTypeQuery,
} from 'src/graphql/generated/graphql';
import { useNavigation } from 'src/navigation/routes';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { HeaderFilter, ButtonOval, Search, ButtonClear } from 'src/ui';
import { getValues } from 'src/utils/getValues';
import { Container } from './style';

export const LocationFilter = () => {
  const { name, type, dimension } = useSelector(state => state.location);
  const { applyLocation, clearLocation } = useActions();
  const [valueName, setValueName] = useState(name || '');
  const [valueType, setValueType] = useState(type || '');
  const [valueDimension, setValueDimension] = useState(dimension || '');
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
    applyLocation(filter);
    goBack();
  };
  const handleClear = () => {
    clearLocation();
    goBack();
  };
  const handleType = (value: string) => {
    if (value === filter.type) {
      setFilter({ ...filter, type: null });
    } else {
      setFilter({ ...filter, type: value });
    }
  };

  const handleDimension = (value: string) => {
    if (value === filter.dimension) {
      setFilter({ ...filter, dimension: null });
    } else {
      setFilter({ ...filter, dimension: value });
    }
  };

  const handleName = (value: string) => {
    if (value === filter.name) {
      setFilter({ ...filter, name: null });
    } else {
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
