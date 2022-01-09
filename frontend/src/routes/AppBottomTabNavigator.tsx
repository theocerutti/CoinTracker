import {routes, screens} from './RouteItems';
import React from 'react';
import {View} from 'native-base';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import PortfolioStackNavigator from './app-navigators/PortfolioStackNavigator';
import SubscriptionStackNavigator from './app-navigators/SubscriptionStackNavigator';
import HomeStackNavigator from './app-navigators/HomeStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = (props: any): BottomTabNavigationOptions => {
  const item = routes.find(routeItem => routeItem.name === props.route.name);

  if (!item || !item.showInTab) {
    return {
      tabBarButton: () => <View style={{width: 0}} />,
      headerShown: false,
    };
  }

  return {
    tabBarIcon: (tabBarProps: any) => item.icon(tabBarProps.focused),
    tabBarLabel: () => null,
    headerShown: false,
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
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
