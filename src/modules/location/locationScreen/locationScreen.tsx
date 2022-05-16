import React from 'react';
import { FlatList } from 'react-native';
import { useGetLocationsQuery } from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { LocationCard, Loader, Wrapper } from 'src/ui';

export const LocationScreen = () => {
  const { name, type, dimension } = useSelector(state => state.location);
  const { data, loading, fetchMore } = useGetLocationsQuery({
    variables: {
      name,
      type,
      dimension,
      page: 1,
    },
  });
  const locations = data?.locations?.results;
  const page = data?.locations?.info?.next;

  const update = async () => {
    await fetchMore({
      variables: { page: page },
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <FlatList
        data={locations}
        renderItem={({ item }) => <LocationCard {...item} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        onEndReached={page ? update : null}
        onEndReachedThreshold={2}
      />
    </Wrapper>
  );
};
