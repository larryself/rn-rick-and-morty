import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EpisodeDetail, EpisodeScreen } from 'src/modules/episode';
import { ButtonBack, HeaderFilter } from 'src/ui';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const EpisodeStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.EpisodeScreen}>
      <Stack.Screen name={Routes.EpisodeScreen} component={EpisodeScreen} />
      <Stack.Screen
        name={Routes.EpisodeDetail}
        component={EpisodeDetail}
        options={{
          header: ({ options }) => {
            return (
              <HeaderFilter title={options.title ?? ''} left={<ButtonBack />} />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
