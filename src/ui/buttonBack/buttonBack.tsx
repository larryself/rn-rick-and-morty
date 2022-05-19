import React from 'react';
import { ArrowBack } from 'assets/images/icons/arrowBack';
import { useNavigation } from 'src/navigation/routes';
import { Button, Title } from './style';

export const ButtonBack = () => {
  const { goBack, canGoBack } = useNavigation();
  const handleButton = () => {
    if (canGoBack()) {
      return goBack();
    }
  };
  return (
    <Button onPress={handleButton}>
      <ArrowBack />
      <Title>Back</Title>
    </Button>
  );
};
