import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {routes, screens} from '../../routes/RouteItems';
import {Text} from '../../components';

const AppDrawer = (
  props: DrawerContentComponentProps & {currentRoute?: string},
) => {
  const currentRouteName = props.currentRoute;
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

export default AppDrawer;
