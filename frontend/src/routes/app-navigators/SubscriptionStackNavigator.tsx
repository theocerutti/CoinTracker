import {Stack} from '../RootRoutes';
import React from 'react';
import Subscription from '../../pages/app/Subscription';
import {screens} from '../RouteItems';

const SubscriptionStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Subscription} component={Subscription} />
    </Stack.Navigator>
  );
};

export default SubscriptionStackNavigator;
