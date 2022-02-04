import {Stack} from '../RootRoutes';
import Home from '../../containers/app/Home';
import React from 'react';
import {screens} from '../RouteItems';

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
