import React from 'react';
import { FlatList } from 'react-native';
import {
  LocationsFragment,
  useGetLocationsQuery,
} from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { LocationCard, Loader, Wrapper } from 'src/ui';

export const LocationScreen = () => {
  const { name, type, dimension } = useSelector(state => state.location);
  const { data, loading, fetchMore } = useGetLocationsQuery({
    variables: {
      name: name || '',
      type: type || '',
      dimension: dimension || '',
      page: 1,
    },
  });
  const locations = data?.locations?.results;
  const page = data?.locations?.info?.next;

  const loadLocation = async () => {
    await fetchMore({
      variables: { page },
    });
  };
  const renderItem = ({ item }: { item: LocationsFragment }) => (
    <LocationCard {...item} key={item.id} />
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
        keyExtractor={item => `${item.id}`}
        onEndReached={page ? loadLocation : null}
        onEndReachedThreshold={2}
        initialNumToRender={15}
        maxToRenderPerBatch={20}
        ListFooterComponent={page ? <Loader /> : null}
      />
    </Wrapper>
  );
};
