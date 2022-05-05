import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEpisodeByIDQuery } from 'src/modules/graphql/episodes';
import { EpisodeTabScreenProps } from 'src/navigation/types';
import {
  CharacterCard,
  CharacterCardProps,
  DetailContainer,
  Loader,
} from 'src/ui';

export const EpisodeDetail = () => {
  const { setOptions } = useNavigation();
  const { params } =
    useRoute<EpisodeTabScreenProps<'EpisodeDetail'>['route']>();
  const { data, loading } = useEpisodeByIDQuery(params.id);
  useEffect(() => {
    setOptions({ title: params.title });
  }, [params]);
  const renderItem = ({ item }: ListRenderItemInfo<CharacterCardProps>) => (
    <CharacterCard {...item} />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailContainer
      firstInfo={data.episode.air_date}
      title={data.episode.name}
      latterInfo={data.episode.episode}
      subTitle={'Characters'}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.episode.characters}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
      />
    </DetailContainer>
  );
};
