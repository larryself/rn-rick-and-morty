import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Arrow } from 'assets/images/icons/arrow';
import { useGetCharacterQuery } from 'src/graphql/generated/graphql';
import { Routes, useNavigation } from 'src/navigation/routes';
import { CharacterTabScreenProps } from 'src/navigation/types';
import { EpisodeCard, Loader, DetailContainer } from 'src/ui';
import { Line } from 'src/ui';
import { Container, Info, Location, SubTitle, Title, Wrap } from './style';

export const CharacterDetail = () => {
  const { setOptions, navigate } = useNavigation();
  const {
    params: { title, id },
  } = useRoute<CharacterTabScreenProps<Routes.CharacterDetail>['route']>();
  const { data, loading } = useGetCharacterQuery({ variables: { id } });
  useEffect(() => {
    setOptions({ title });
  }, [title]);

  if (loading) {
    return <Loader />;
  }

  return (
    <DetailContainer
      img={data?.character.image}
      firstInfo={data?.character.status}
      title={data?.character.name}
      latterInfo={data?.character.species}
      subTitle={'Informations'}>
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
          }}>
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
      <Wrap>
        {data?.character.episode.map(episode => (
          <EpisodeCard key={episode.id} {...episode} />
        ))}
      </Wrap>
      <Line />
    </DetailContainer>
  );
};
