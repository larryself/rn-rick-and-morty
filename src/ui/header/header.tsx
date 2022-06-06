import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';

import { useCharacterFilter } from 'src/graphql/client/characterFilter';
import { useEpisodeFilter } from 'src/graphql/client/episodeFilter';
import { useLocationFilter } from 'src/graphql/client/locationFilter';
import { useNavigation } from 'src/navigation/routes';

import { Button, ButtonText, Circle, Container, Title } from './style';

export interface HeaderProps {
  title: string;
  filter: string;
}

export const Header: FC<HeaderProps> = ({ title, filter }) => {
  const { navigate } = useNavigation();
  const characterFilter = useCharacterFilter();
  const episodeFilter = useEpisodeFilter();
  const locationFilter = useLocationFilter();
  let isEmpty;

  if (title === 'Character') {
    isEmpty = Object.values(characterFilter.filter).join('');
  }

  if (title === 'Location') {
    isEmpty = Object.values(locationFilter.filter).join('');
  }

  if (title === 'Episode') {
    isEmpty = Object.values(episodeFilter.filter).join('');
  }

  return (
    <SafeAreaView>
      <Container>
        <Button onPress={() => navigate(filter)}>
          {isEmpty ? <Circle /> : null}
          <ButtonText>Filter</ButtonText>
        </Button>
        <Title>{title}</Title>
      </Container>
    </SafeAreaView>
  );
};
