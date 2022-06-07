import React, { FC, ReactNode } from 'react';

import { Line } from 'src/ui';

import { Container, Inner, Season, Wrap } from './style';

export interface SeasonContainerProps {
  title: string;
  children: ReactNode;
}

export const SeasonContainer: FC<SeasonContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <Wrap>
        <Season>Season {+title.slice(1)}</Season>
        <Line />
        <Inner>{children}</Inner>
        <Line />
      </Wrap>
    </Container>
  );
};
