import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  EpisodeDetail,
  EpisodeFilter,
  EpisodeScreen,
} from 'src/modules/episode';
import { Header, ButtonBack } from 'src/ui';
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
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '900',
              fontSize: 15,
            },
            headerLeft: () => <ButtonBack />,
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
