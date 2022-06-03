import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Character, Episode, Location } from 'assets/images/icons/';
import { CharacterScreen } from 'src/modules/character';
import { EpisodeScreen } from 'src/modules/episode';
import { LocationScreen } from 'src/modules/location';
import { COLORS } from 'src/theme/colors';
import { Header } from 'src/ui';
import { Routes } from './routes';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.CharacterScreen}
      screenOptions={{
        tabBarActiveTintColor: COLORS.INDIGO,
      }}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          tabBarLabel: 'Character',
          tabBarIcon: ({ focused }) => <Character focused={focused} />,
          header: props => {
            const title = 'Character';
            return (
              <Header
                {...props}
                title={title}
                filter={Routes.CharacterFilter}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ focused }) => <Location focused={focused} />,
          header: props => {
            const title = 'Location';
            return (
              <Header {...props} title={title} filter={Routes.LocationFilter} />
            );
          },
        }}
      />
      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          tabBarLabel: 'Episode',
          tabBarIcon: ({ focused }) => <Episode focused={focused} />,
          header: props => {
            const title = 'Episode';
            return (
              <Header {...props} title={title} filter={Routes.EpisodeFilter} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
