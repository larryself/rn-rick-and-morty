import React, { ReactNode } from 'react';
import RNRestart from 'react-native-restart';

import { Button, ButtonText, Container, Inner, Title } from './style';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }
  state: State = {
    hasError: false,
  };

  handleButton() {
    RNRestart.Restart();
  }

  render() {
    return this.state.hasError ? (
      <Inner>
        <Container>
          <Title>Oops, Something Went Wrong</Title>
          <Button onPress={() => this.handleButton()}>
            <ButtonText>Back to Home</ButtonText>
          </Button>
        </Container>
      </Inner>
    ) : (
      this.props.children
    );
  }
}
