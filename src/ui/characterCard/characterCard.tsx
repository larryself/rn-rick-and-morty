import React, { FC } from 'react';
import { Dimensions } from 'react-native';

import { CharactersFragment } from 'src/graphql/generated/graphql';
import { Routes, useNavigation } from 'src/navigation/routes';

import { Container, Description, Img, Name, Status } from './style';

const { width } = Dimensions.get('screen');

type CharacterProps = {
  character: CharactersFragment;
};
export const CharacterCard: FC<CharacterProps> = React.memo(({ character }) => {
  const { id, name, image, status } = character;
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
      }>
      <Img source={{ uri: image }} />
      <Description>
        <Status>{status}</Status>
        <Name numberOfLines={2}>{name}</Name>
      </Description>
    </Container>
  );
});
