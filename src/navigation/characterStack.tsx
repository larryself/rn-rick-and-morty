import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CharacterDetail,
  CharacterFilter,
  CharacterScreen,
} from 'src/modules/character';
import { Header, ButtonBack } from 'src/ui';
import { HeaderFilter } from 'src/ui/headerFilter/headerFilter';

import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const CharacterStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.CharacterScreen}>
      <Stack.Group>
        <Stack.Screen
          name={Routes.CharacterScreen}
          component={CharacterScreen}
          options={{
            header: props => {
              const title = 'Character';
              return (
                <Header
                  {...props}
                  title={title}
                  stack={Routes.CharacterStack}
                  filter={Routes.CharacterFilter}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={Routes.CharacterDetail}
          component={CharacterDetail}
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
          name={Routes.CharacterFilter}
          component={CharacterFilter}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
