import React, { FC } from 'react';
import { Dimensions } from 'react-native';
import { LocationsFragment } from 'src/graphql/generated/graphql';
import { Routes, useNavigation } from 'src/navigation/routes';
import { Container, Name, Type } from './style';

const { width } = Dimensions.get('screen');

export const LocationCard: FC<LocationsFragment> = React.memo(
  ({ type, name, id }) => {
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
        }>
        <Type numberOfLines={1}>{type}</Type>
        <Name numberOfLines={2}>{name}</Name>
      </Container>
    );
  }
);
