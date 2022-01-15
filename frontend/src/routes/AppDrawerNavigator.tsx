import {
  createDrawerNavigator,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import {screens} from './RouteItems';
import React from 'react';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import AppDrawer from '../containers/layout/AppDrawer';
import AppHeader from '../containers/layout/AppHeader';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = (props: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (headerProps: DrawerHeaderProps) => (
          <AppHeader {...headerProps} />
        ),
      }}
      drawerContent={drawerProps => (
        <AppDrawer {...drawerProps} currentRoute={props.route?.name} />
      )}>
      <Drawer.Screen
        name={screens.HomeTab}
        component={AppBottomTabNavigator}
        options={{
          title: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;
