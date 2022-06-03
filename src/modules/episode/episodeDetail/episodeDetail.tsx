import React, { useEffect } from 'react';
import { useNavigation } from 'src/navigation/routes';
import { useGetEpisodeQuery } from 'src/graphql/generated/graphql';
import { useRoute } from 'src/navigation/types';
import { CharacterCard, DetailContainer, Loader } from 'src/ui';
import { Container } from './style';

export const EpisodeDetail = () => {
  const { setOptions } = useNavigation();
  const {
    params: { title, id },
  } = useRoute();
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
