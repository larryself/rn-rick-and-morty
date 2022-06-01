import React from 'react';
import { FlatList } from 'react-native';
import {
  CharactersFragment,
  useGetCharactersQuery,
} from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { CharacterCard, Loader, Wrapper } from 'src/ui';
export const CharacterScreen = () => {
  const { species, status, gender, name } = useSelector(
    state => state.character
  );
  const { data, loading, fetchMore } = useGetCharactersQuery({
    variables: {
      name: name || '',
      status: status || '',
      gender: gender || '',
      species: species || '',
      page: 1,
    },
  });
  const characters = data?.characters.results;
  const page = data?.characters.info.next;
  const loadCharacters = async () => {
    await fetchMore({
      variables: { page },
    });
  };
  const renderItem = ({ item }: { item: CharactersFragment }) => (
    <CharacterCard character={item} key={item.id} />
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <FlatList
        data={characters}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        onEndReached={page ? loadCharacters : null}
        onEndReachedThreshold={2}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        updateCellsBatchingPeriod={20 / 4}
      />
    </Wrapper>
  );
};
