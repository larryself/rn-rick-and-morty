import React from 'react';

import { ButtonContainer, Title } from './style';

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export const ButtonOval = ({ title, onPress }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};
