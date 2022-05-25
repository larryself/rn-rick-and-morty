import React from 'react';
import { Button, Title } from './style';

type ButtonProps = {
  onApply?: () => void;
};

export const ButtonApply = ({ onApply }: ButtonProps) => {
  return (
    <Button onPress={onApply}>
      <Title>Apply</Title>
    </Button>
  );
};
