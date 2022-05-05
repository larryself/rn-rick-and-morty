import React, { FC } from 'react';
import { Dimensions } from 'react-native';

import { Routes, useNavigation } from 'src/navigation/routes';

import { Container, Description, Img, Name, Status } from './style';

export interface CharacterCardProps {
  image: string;
  status: string;
  name: string;
  id: string;
}

const { width } = Dimensions.get('screen');

export const CharacterCard: FC<CharacterCardProps> = ({
  image,
  status,
  name,
  id,
}) => {
  const { navigate } = useNavigation();

  return (
    <Container
      width={width}
      onPress={() =>
        navigate(Routes.CharacterStack, {
          screen: Routes.CharacterDetail,
          params: {
            id,
            title: name,
          },
        })
      }
    >
      <Img source={{ uri: image }} />
      <Description>
        <Status>{status}</Status>
        <Name>{name}</Name>
      </Description>
    </Container>
  );
};
