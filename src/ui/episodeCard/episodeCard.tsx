import React, { FC } from 'react';
import { Arrow } from 'assets/images/icons/arrow';
import { EpisodesFragment } from 'src/graphql/generated/graphql';
import { Routes, useNavigation } from 'src/navigation/routes';
import { Container, Date, Episode, Inner, Name, Wrap } from './style';

export const EpisodeCard: FC<EpisodesFragment> = ({
  episode,
  air_date,
  name,
  id,
}) => {
  const { navigate } = useNavigation();

  return (
    <Container
      onPress={() =>
        navigate(Routes.EpisodeStack, {
          screen: Routes.EpisodeDetail,
          params: {
            id,
            title: name,
          },
        })
      }>
      <Inner>
        <Wrap>
          <Episode>{episode}</Episode>
          <Name>{name}</Name>
          <Date>{air_date}</Date>
        </Wrap>
        <Arrow />
      </Inner>
    </Container>
  );
};
