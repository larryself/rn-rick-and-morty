import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useCharactersQuery } from 'src/modules/graphql/characters';
import { useSelector } from 'src/store/hooks/useSelector';
import { CharacterCard, CharacterCardProps, Loader, Wrapper } from 'src/ui';

export const CharacterScreen = () => {
  const { species, status, gender, name, apply_filter } = useSelector(
    state => state.character
  );
  const { data, loading } = useCharactersQuery(name, status, gender, species);
  const characters = data?.characters.results;
  const renderItem = ({ item }: ListRenderItemInfo<CharacterCardProps>) => (
    <CharacterCard {...item} />
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
      />
    </Wrapper>
  );
};
