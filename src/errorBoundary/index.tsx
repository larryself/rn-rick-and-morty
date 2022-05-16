import React from 'react';
import { Inner, Container, Title, Button, ButtonText } from './style';
import RNRestart from 'react-native-restart';

export class ErrorBoundary extends React.Component<any, any> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

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
