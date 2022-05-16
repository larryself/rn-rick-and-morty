import React from 'react';
import { useGetLocationsNameQuery } from 'src/graphql/generated/graphql';
import { unique } from 'src/utils/unique';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { Loader, Search, Select } from 'src/ui';

import { Container } from './style';

export const LocationFilter = () => {
  const { setType, setDimension, setNameCharacter } = useActions();
  const { name, type, dimension } = useSelector(state => state.location);
  const { data, loading } = useGetLocationsNameQuery();
  const locations = data?.locations.results;

  const typeSelect = (item: string) => {
    setType(item);
  };

  const dimensionSelect = (item: string) => {
    setDimension(item);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Search
        title={'Name'}
        guide={'Give a name'}
        selected={name}
        select={setNameCharacter}
        list={locations}
      />
      <Select
        title={'Type'}
        guide={'Select one'}
        selected={type}
        onSelect={typeSelect}
        types={unique(locations, 'type')}
      />
      <Select
        title={'Dimension'}
        guide={'Select one'}
        selected={dimension}
        onSelect={dimensionSelect}
        types={unique(locations, 'dimension')}
      />
    </Container>
  );
};
