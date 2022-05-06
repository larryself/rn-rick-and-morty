import React, { FC } from 'react';
import { Arrow } from 'assets/images/icons/arrow';

import { Routes, useNavigation } from 'src/navigation/routes';

import { Container, Date, Episode, Inner, Name, Wrap } from './style';

export interface EpisodeCardProps {
  episode: string;
  name: string;
  air_date: string;
  id: string;
}

export const EpisodeCard: FC<EpisodeCardProps> = ({
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
