import React from 'react';

import { ButtonBlock, Title } from './style';

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export const ButtonClear = ({ title, onPress }: ButtonProps) => {
  return (
    <ButtonBlock onPress={onPress}>
      <Title>{title}</Title>
    </ButtonBlock>
  );
};
