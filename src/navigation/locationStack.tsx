import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  LocationDetail,
  LocationFilter,
  LocationScreen,
} from 'src/modules/location';
import { Header, ButtonBack } from 'src/ui';

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
