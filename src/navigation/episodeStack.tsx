import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  EpisodeDetail,
  EpisodeFilter,
  EpisodeScreen,
} from 'src/modules/episode';
import { Header, ButtonBack, HeaderFilter } from 'src/ui';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const EpisodeStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.EpisodeScreen}>
      <Stack.Group>
        <Stack.Screen
          name={Routes.EpisodeScreen}
          component={EpisodeScreen}
          options={{
            header: props => {
              const title = 'Episode';
              return (
                <Header
                  {...props}
                  title={title}
                  stack={Routes.EpisodeStack}
                  filter={Routes.EpisodeFilter}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={Routes.EpisodeDetail}
          component={EpisodeDetail}
          options={{
            header: ({ options }) => {
              return (
                <HeaderFilter
                  title={options.title ?? ''}
                  left={<ButtonBack />}
                />
              );
            },
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={Routes.EpisodeFilter}
          component={EpisodeFilter}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
