import React from 'react';
import { FlatList } from 'react-native';
import { useGetCharactersQuery } from 'src/graphql/generated/graphql';
import { useSelector } from 'src/store/hooks/useSelector';
import { CharacterCard, Loader, Wrapper } from 'src/ui';

export const CharacterScreen = () => {
  const { species, status, gender, name, apply_filter } = useSelector(
    state => state.character
  );
  const { data, loading, fetchMore } = useGetCharactersQuery({
    variables: {
      name,
      status,
      gender,
      species,
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

  if (loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <FlatList
        data={characters}
        renderItem={({ item }) => <CharacterCard character={item} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={item => item.id}
        onEndReached={page ? loadCharacters : null}
        onEndReachedThreshold={2}
      />
    </Wrapper>
  );
};
