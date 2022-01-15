import React, {ReactComponentElement} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
import {getTheme} from '../utils/theme';

const RouteIcon = styled(Icon)<{isFocused: boolean}>`
  color: ${props =>
    getTheme(props)[props.isFocused ? 'buttonPrimary' : 'buttonSecondary']};
`;

export type Screens = Record<string, string>;

export type Route = {
  name: string;
  focusedRoute: keyof Screens;
  title: string;
  showInTab: boolean;
  showInDrawer: boolean;
  icon: (focused: boolean) => ReactComponentElement<typeof Icon>;
};

export const screens: Screens = {
  HomeTab: 'HomeTab',

  HomeStack: 'HomeStack',
  Home: 'Home',
  SubscriptionStack: 'SubscriptionStack',
  Subscription: 'Subscription',
  PortfolioStack: 'PortfolioStack',
  Portfolio: 'Portfolio',
};

const focusOptions = (focused: boolean) => {
  return {
    size: focused ? 30 : 25,
    //[focused ? 'light' : 'solid']: true,
  };
};

export const routes: Array<Route> = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <RouteIcon isFocused={focused} name="home" {...focusOptions(focused)} />
    ),
  },

  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused: boolean) => (
      <RouteIcon isFocused={focused} name="home" {...focusOptions(focused)} />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <RouteIcon isFocused={focused} name="home" {...focusOptions(focused)} />
    ),
  },
  {
    name: screens.SubscriptionStack,
    focusedRoute: screens.SubscriptionStack,
    title: 'Subscription',
    showInTab: true,
    showInDrawer: true,
    icon: (focused: boolean) => (
      <RouteIcon
        isFocused={focused}
        name="star"
        solid
        {...focusOptions(focused)}
      />
    ),
  },
  {
    name: screens.Subscription,
    focusedRoute: screens.SubscriptionStack,
    title: 'Subscription',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <RouteIcon
        isFocused={focused}
        name="star"
        solid
        {...focusOptions(focused)}
      />
    ),
  },
  {
    name: screens.PortfolioStack,
    focusedRoute: screens.PortfolioStack,
    title: 'Portfolio',
    showInTab: true,
    showInDrawer: true,
    icon: (focused: boolean) => (
      <RouteIcon isFocused={focused} name="wallet" {...focusOptions(focused)} />
    ),
  },
  {
    name: screens.Portfolio,
    focusedRoute: screens.PortfolioStack,
    title: 'Portfolio',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <RouteIcon isFocused={focused} name="wallet" {...focusOptions(focused)} />
    ),
  },
];
