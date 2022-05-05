import React from 'react';
import {Provider} from 'react-redux';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from 'src/navigation/root';
import {store} from './store';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
};
