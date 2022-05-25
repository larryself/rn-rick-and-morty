import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LocationDetail,
  LocationFilter,
  LocationScreen,
} from 'src/modules/location';
import { Header, ButtonBack, HeaderFilter } from 'src/ui';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const LocationStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.LocationScreen}>
      <Stack.Group>
        <Stack.Screen
          name={Routes.LocationScreen}
          component={LocationScreen}
          options={{
            header: props => {
              const title = 'Location';
              return (
                <Header
                  {...props}
                  title={title}
                  stack={Routes.LocationStack}
                  filter={Routes.LocationFilter}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name={Routes.LocationDetail}
          component={LocationDetail}
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
          name={Routes.LocationFilter}
          component={LocationFilter}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
