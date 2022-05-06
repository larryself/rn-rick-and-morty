import React from 'react';
import { useNavigation } from 'src/navigation/routes';
import { useActions } from 'src/store/hooks/useAction';

import { Button, Title } from './style';

export const ButtonApply = ({ type }: { type: string }) => {
  const { applyCharacter, applyEpisode, applyLocation } = useActions();
  const navigation = useNavigation();

  const handleButton = () => {
    if (type === 'character') {
      applyCharacter();
    }

    if (type === 'location') {
      applyLocation();
    }

    if (type === 'episode') {
      applyEpisode();
    }
    navigation.goBack();
  };
  return (
    <Button onPress={handleButton}>
      <Title>Apply</Title>
    </Button>
  );
};
