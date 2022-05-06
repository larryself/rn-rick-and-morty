import React from 'react';
import { useLocationsQuery } from 'src/modules/graphql/locations';
import { unique } from 'src/utils/unique';
import { useActions } from 'src/store/hooks/useAction';
import { useSelector } from 'src/store/hooks/useSelector';
import { Search, Select } from 'src/ui';

import { Container } from './style';

export const LocationFilter = () => {
  const { setType, setDimension } = useActions();
  const { type, dimension } = useSelector(state => state.location);
  const { data } = useLocationsQuery();
  const locations = data?.locations.results;

  const typeSelect = (item: string) => {
    setType(item);
  };

  const dimensionSelect = (item: string) => {
    setDimension(item);
  };

  return (
    <Container>
      <Search title={'Name'} guide={'Give a name'} />
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
