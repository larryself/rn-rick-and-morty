import React from 'react';
import { ArrowBack } from 'assets/images/icons/arrowBack';
import { useNavigation } from 'src/navigation/routes';
import { Button, Title } from './style';

export const ButtonBack = () => {
  const { goBack } = useNavigation();

  return (
    <Button onPress={goBack}>
      <ArrowBack />
      <Title>Back</Title>
    </Button>
  );
};
