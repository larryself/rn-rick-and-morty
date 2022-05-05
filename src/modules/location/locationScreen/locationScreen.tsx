import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useLocationsQuery } from 'src/modules/graphql/locations';
import { useSelector } from 'src/store/hooks/useSelector';
import { LocationCard, LocationCardProps, Loader, Wrapper } from 'src/ui';

export const LocationScreen = () => {
  const { name, type, dimension, apply_filter } = useSelector(
    (state) => state.location,
  );
  const { data, loading } = useLocationsQuery(name, type, dimension);
  const locations = data?.locations.results;
  const renderItem = ({ item }: ListRenderItemInfo<LocationCardProps>) => (
    <LocationCard {...item} />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <FlatList
        data={locations}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  );
};
