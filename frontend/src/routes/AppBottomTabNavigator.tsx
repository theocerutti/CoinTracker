import {screens} from './RouteItems';
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import PortfolioStackNavigator from './app-navigators/PortfolioStackNavigator';
import SubscriptionStackNavigator from './app-navigators/SubscriptionStackNavigator';
import HomeStackNavigator from './app-navigators/HomeStackNavigator';
import AppFooter from '../containers/layout/AppFooter';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <AppFooter {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen
        name={screens.PortfolioStack}
        component={PortfolioStackNavigator}
      />
      <Tab.Screen
        name={screens.SubscriptionStack}
        component={SubscriptionStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
