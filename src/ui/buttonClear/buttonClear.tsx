import React from 'react';

import { ButtonBlock, Title } from './style';

type ButtonProps = {
  onClear?: () => void;
};

export const ButtonClear = ({ onClear }: ButtonProps) => {
  return (
    <ButtonBlock onPress={onClear}>
      <Title>Clear</Title>
    </ButtonBlock>
  );
};
