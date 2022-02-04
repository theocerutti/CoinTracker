import React from 'react';
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItem,} from '@react-navigation/drawer';
import {routes, screens} from '../../routes/RouteItems';
import {Text} from '../../components';
import {useDispatch} from 'react-redux';
import {Binance, Coinbase} from '../../exchanges';
import {setCurrentExchange} from '../../store/slices/appConfig';

const AppDrawer = (
  props: DrawerContentComponentProps & {currentRoute?: string},
) => {
  const dispatch = useDispatch();
  const currentRouteName = props.currentRoute;
  return (
    <DrawerContentScrollView {...props}>
      <Text>Exchanges</Text>
      <DrawerItem
        key={'coinbase-exchange-setting'}
        label={() => <Text>Coinbase</Text>}
        onPress={() =>
          dispatch(
            setCurrentExchange(
              new Coinbase({
                apiKey: '9nXxZtkhQinEA6fe',
                secret: 'CRbgFPeqqO5fnfigPceyXRSVlKGsAwra',
                timeout: 30000,
                enableRateLimit: true,
              }),
            ),
          )
        }
      />
      <DrawerItem
        key={'binance-exchange-setting'}
        label={() => <Text>Binance</Text>}
        onPress={() =>
          dispatch(
            setCurrentExchange(
              new Binance({
                apiKey:
                  'tdM1tGx6BM1lHw4Y8Oa1gOaR7U4U8igMuYOInjork9v7UT56K03qFTvcY6diZ2tG',
                secret:
                  'XTSxMAKh31tJo2032pFQ35xxBRFqjiRWZ9IR8rKJwniE6pOHjKdTCMzlhtKN5puO',
                timeout: 30000,
                enableRateLimit: true,
              }),
            ),
          )
        }
      />
      <Text>Routes</Text>
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
