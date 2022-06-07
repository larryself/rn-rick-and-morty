import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CharacterDetail, CharacterScreen } from 'src/modules/character';
import { ButtonBack, HeaderDetailed } from 'src/ui';

import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const CharacterStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.CharacterScreen}>
      <Stack.Screen name={Routes.CharacterScreen} component={CharacterScreen} />
      <Stack.Screen
        name={Routes.CharacterDetail}
        component={CharacterDetail}
        options={{
          header: ({ options }) => {
            return (
              <HeaderDetailed
                title={options.title ?? ''}
                left={<ButtonBack />}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
