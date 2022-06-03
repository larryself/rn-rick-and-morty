import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationDetail, LocationScreen } from 'src/modules/location';
import { ButtonBack, HeaderFilter } from 'src/ui';
import { Routes } from './routes';

const Stack = createNativeStackNavigator();

export const LocationStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.LocationScreen}>
      <Stack.Screen name={Routes.LocationScreen} component={LocationScreen} />
      <Stack.Screen
        name={Routes.LocationDetail}
        component={LocationDetail}
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
