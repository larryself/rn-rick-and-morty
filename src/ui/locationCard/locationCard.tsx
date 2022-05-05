import React, { FC } from 'react';
import { Dimensions } from 'react-native';

import { Routes, useNavigation } from 'src/navigation/routes';

import { Container, Name, Type } from './style';

export interface LocationCardProps {
  type: string;
  name: string;
  id: string;
}

const { width } = Dimensions.get('screen');

export const LocationCard: FC<LocationCardProps> = ({ type, name, id }) => {
  const { navigate } = useNavigation();

  return (
    <Container
      width={width}
      onPress={() =>
        navigate(Routes.LocationStack, {
          screen: Routes.LocationDetail,
          params: {
            id,
            title: name,
          },
        })
      }
    >
      <Type>{type}</Type>
      <Name>{name}</Name>
    </Container>
  );
};
