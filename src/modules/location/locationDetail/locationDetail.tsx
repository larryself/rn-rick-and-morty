import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useLocationByIDQuery } from 'src/modules/graphql/locations';
import { useNavigation } from 'src/navigation/routes';
import { LocationTabScreenProps } from 'src/navigation/types';
import {
  CharacterCard,
  CharacterCardProps,
  Loader,
  DetailContainer,
} from 'src/ui';

export const LocationDetail = () => {
  const { setOptions } = useNavigation();
  const { params } =
    useRoute<LocationTabScreenProps<'LocationDetail'>['route']>();
  const { data, loading } = useLocationByIDQuery(params.id);
  useEffect(() => {
    setOptions({ title: params?.title });
  }, [params]);

  const renderItem = ({ item }: ListRenderItemInfo<CharacterCardProps>) => (
    <CharacterCard {...item} />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailContainer
      firstInfo={data.location.type}
      title={data.location.name}
      latterInfo={data.location.dimension}
      subTitle={'Characters'}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.location.residents}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    </DetailContainer>
  );
};
