import React, { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { ButtonInner, Container, Title } from './style';

export interface HeaderProps {
  title: string;
  right?: ReactNode;
  left?: ReactNode;
}

export const HeaderFilter: FC<HeaderProps> = ({ left, title, right }) => {
  return (
    <SafeAreaView>
      <Container>
        <ButtonInner>
          {left}
        </ButtonInner>
        <Title>{title}</Title>
        <ButtonInner>
          {right}
        </ButtonInner>
      </Container>
    </SafeAreaView>
  );
};
