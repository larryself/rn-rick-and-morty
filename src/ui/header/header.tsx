import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from 'src/navigation/routes';

import { Button, ButtonText, Container, Title } from './style';

export interface HeaderProps {
  title: string;
  stack: string;
  filter: string;
}

export const Header: FC<HeaderProps> = ({ title, stack, filter }) => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <Container>
        <Button
          onPress={() =>
            navigate(stack, {
              screen: filter,
            })
          }>
          <ButtonText>Filter</ButtonText>
        </Button>
        <Title>{title}</Title>
      </Container>
    </SafeAreaView>
  );
};
