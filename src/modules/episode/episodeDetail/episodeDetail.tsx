import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetEpisodeQuery } from 'src/graphql/generated/graphql';
import { Routes } from 'src/navigation/routes';
import { EpisodeTabScreenProps } from 'src/navigation/types';
import { CharacterCard, DetailContainer, Loader } from 'src/ui';
import { Container } from './style';

export const EpisodeDetail = () => {
  const { setOptions } = useNavigation();
  const {
    params: { id, title },
  } = useRoute<EpisodeTabScreenProps<Routes.EpisodeDetail>['route']>();
  const { data, loading } = useGetEpisodeQuery({ variables: { id } });
  useEffect(() => {
    setOptions({ title: title });
  }, [title]);

  if (loading) {
    return <Loader />;
  }
  return (
    <DetailContainer
      firstInfo={data?.episode.air_date}
      title={data?.episode.name}
      latterInfo={data?.episode.episode}
      subTitle={'Characters'}>
      <Container>
        {data?.episode.characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Container>
    </DetailContainer>
  );
};
