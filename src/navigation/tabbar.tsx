import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Character } from 'assets/images/icons/character';
import { Episode } from 'assets/images/icons/episode';
import { Location } from 'assets/images/icons/location';

import { COLORS } from 'src/theme/colors';

import { CharacterStack } from './characterStack';
import { EpisodeStack } from './episodeStack';
import { LocationStack } from './locationStack';
import { Routes } from './routes';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterStack}
      screenOptions={{
        tabBarActiveTintColor: COLORS.INDIGO,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={Routes.CharacterStack}
        component={CharacterStack}
        options={{
          tabBarLabel: 'Character',
          tabBarIcon: ({ focused }) => <Character focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.LocationStack}
        component={LocationStack}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ focused }) => <Location focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.EpisodeStack}
        component={EpisodeStack}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => <Episode focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};
