import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {routes, screens} from './RouteItems';
import {Text} from 'react-native';
import React from 'react';
import AppBottomTabNavigator from './AppBottomTabNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const currentRouteName = props.currentRoute?.name;
  return (
    <DrawerContentScrollView {...props}>
      {routes
        .filter(route => route.showInDrawer)
        .map(route => {
          const focusedRoute = routes.find(r => r.name === currentRouteName);
          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.HomeStack;

          return (
            <DrawerItem
              key={route.name}
              label={() => <Text>{route.title}</Text>}
              onPress={() => props.navigation.navigate(route.name)}
            />
          );
        })}
    </DrawerContentScrollView>
  );
};

const AppDrawerNavigator = (props: any) => {
  return (
    <Drawer.Navigator
      drawerContent={drawerProps => (
        <CustomDrawerContent {...drawerProps} currentRoute={props.route} />
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
