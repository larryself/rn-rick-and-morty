import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './style';

export const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size={'large'} />
    </Container>
  );
};
