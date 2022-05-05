import React from 'react';
import { useNavigation } from 'src/navigation/routes';

import { useActions } from 'src/store/hooks/useAction';

import { ButtonBlock, Title } from './style';

export const ButtonClear = ({ type }: { type: string }) => {
  const { clearCharacter, clearEpisode, clearLocation } = useActions();
  const navigation = useNavigation();

  const handleButton = () => {
    if (type === 'character') {
      clearCharacter();
    }

    if (type === 'location') {
      clearLocation();
    }

    if (type === 'episode') {
      clearEpisode();
    }
    navigation.goBack()
  };

  return (
    <ButtonBlock onPress={handleButton}>
      <Title>Clear</Title>
    </ButtonBlock>
  );
};
