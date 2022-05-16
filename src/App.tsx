import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { ErrorBoundary } from 'src/errorBoundary';
import { client } from 'src/graphql/client';
import { RootNavigation } from 'src/navigation/root';
import { store } from './store';

export const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    </ErrorBoundary>
  );
};
