import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { ErrorBoundary } from 'src/errorBoundary';
import { client } from 'src/graphql/client/client';
import { RootNavigation } from 'src/navigation/root';

export const App = () => {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </ErrorBoundary>
  );
};
