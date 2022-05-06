import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CharacterDetail,
  CharacterFilter,
  CharacterScreen,
} from 'src/modules/character';
import { Header, ButtonClear, ButtonApply, ButtonBack } from 'src/ui';
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
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '900',
              fontSize: 15,
            },
            headerLeft: () => <ButtonBack />,
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ presentation: 'modal', gestureEnabled: false }}>
        <Stack.Screen
          name={Routes.CharacterFilter}
          component={CharacterFilter}
          options={{
            header: () => (
              <HeaderFilter
                title={'Filter'}
                left={<ButtonClear type={'character'} />}
                right={<ButtonApply type={'character'} />}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
