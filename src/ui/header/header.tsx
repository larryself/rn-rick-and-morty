import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from 'src/navigation/routes';
import { useSelector } from 'src/store/hooks/useSelector';

import { Button, ButtonText, Container, Title, Circle } from './style';

export interface HeaderProps {
  title: string;
  stack: string;
  filter: string;
}

export const Header: FC<HeaderProps> = ({ title, stack, filter }) => {
  const { navigate } = useNavigation();

  const { character, episode, location } = useSelector(state => state);
  let isEmpty;
  if (title === 'Character') {
    isEmpty = Object.values(character).join('');
  }
  if (title === 'Location') {
    isEmpty = Object.values(location).join('');
  }
  if (title === 'Episode') {
    isEmpty = Object.values(episode).join('');
  }
  return (
    <SafeAreaView>
      <Container>
        <Button
          onPress={() =>
            navigate(stack, {
              screen: filter,
            })
          }>
          {isEmpty ? <Circle /> : null}
          <ButtonText>Filter</ButtonText>
        </Button>
        <Title>{title}</Title>
      </Container>
    </SafeAreaView>
  );
};
