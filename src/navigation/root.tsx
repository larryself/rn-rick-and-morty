import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CharacterFilter } from 'src/modules/character';
import { EpisodeFilter } from 'src/modules/episode';
import { LocationFilter } from 'src/modules/location';
import { CharacterStack } from 'src/navigation/characterStack';
import { EpisodeStack } from 'src/navigation/episodeStack';
import { LocationStack } from 'src/navigation/locationStack';

import { Routes } from './routes';
import { TabBar } from './tabbar';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.MainNavigator}>
        <Stack.Screen name={Routes.MainNavigator} component={TabBar} />
        <Stack.Screen name={Routes.CharacterStack} component={CharacterStack} />
        <Stack.Screen name={Routes.EpisodeStack} component={EpisodeStack} />
        <Stack.Screen name={Routes.LocationStack} component={LocationStack} />
        <Stack.Group
          screenOptions={{ presentation: 'modal', headerShown: false }}>
          <Stack.Screen
            name={Routes.CharacterFilter}
            component={CharacterFilter}
          />
          <Stack.Screen name={Routes.EpisodeFilter} component={EpisodeFilter} />
          <Stack.Screen
            name={Routes.LocationFilter}
            component={LocationFilter}
          />
        </Stack.Group>
      </Stack.Navigator>
    </React.Fragment>
  );
};
