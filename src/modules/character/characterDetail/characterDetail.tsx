import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Arrow } from 'assets/images/icons/arrow';
import { useCharacterByIDQuery } from 'src/modules/graphql/characters';
import { Routes, useNavigation } from 'src/navigation/routes';
import { CharacterTabScreenProps } from 'src/navigation/types';
import { DetailContainer } from 'src/ui/detailWrapper/detailWrapper';
import { EpisodeCard, EpisodeCardProps, Loader } from 'src/ui';
import { Container, Info, Line, Location, SubTitle, Title } from './style';

export const CharacterDetail = () => {
  const { setOptions, navigate } = useNavigation();
  const { params } =
    useRoute<CharacterTabScreenProps<'CharacterDetail'>['route']>();
  const { data, loading } = useCharacterByIDQuery(params.id);
  useEffect(() => {
    setOptions({ title: params.title });
  }, [params]);
  const renderEpisode = ({ item }: ListRenderItemInfo<EpisodeCardProps>) => (
    <EpisodeCard {...item} />
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailContainer
      img={data?.character.image}
      firstInfo={data?.character.status}
      title={data?.character.name}
      latterInfo={data?.character.species}
      subTitle={'Informations'}
    >
      <Line />
      <Container>
        <SubTitle>Gender</SubTitle>
        <Info>{data?.character.gender}</Info>
        <Line />
      </Container>
      <Container>
        <SubTitle>Origin</SubTitle>
        <Info>{data?.character.origin.name}</Info>
        <Line />
      </Container>
      <Container>
        <SubTitle>Type</SubTitle>
        <Info>{data?.character.type || 'unknown'}</Info>
        <Line />
      </Container>
      <Container>
        <Location
          onPress={() => {
            navigate(Routes.LocationStack, {
              screen: Routes.LocationDetail,
              params: {
                id: data?.character.location.id,
                title: data?.character.location.name,
              },
            });
          }}
        >
          <View>
            <SubTitle>Location</SubTitle>
            <Info>{data?.character.location.name}</Info>
          </View>
          <Arrow />
        </Location>
      </Container>
      <Line />
      <Title>Episodes</Title>
      <Line />
      <FlatList
        data={data?.character.episode}
        renderItem={renderEpisode}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingLeft: 16 }}
        ItemSeparatorComponent={() => <Line />}
      />
      <Line />
    </DetailContainer>
  );
};
