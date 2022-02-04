import {Stack} from '../RootRoutes';
import React from 'react';
import Portfolio from '../../containers/app/Portfolio';
import {screens} from '../RouteItems';

const PortfolioStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Portfolio} component={Portfolio} />
    </Stack.Navigator>
  );
};

export default PortfolioStackNavigator;
