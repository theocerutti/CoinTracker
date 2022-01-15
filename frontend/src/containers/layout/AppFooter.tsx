import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Route, routes} from '../../routes/RouteItems';
import {spacing} from '../../theme';
import {getThemePropSelector} from '../../utils/theme';

const AppFooterContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  height: ${spacing.sp50};
  flex-direction: row;
  background-color: ${getThemePropSelector('backgroundLevel3')}
  width: 100%;
`;

const Tab = ({
  navigation,
  state,
  descriptors,
  route,
  tabIndex,
}: BottomTabBarProps & {route: any; tabIndex: number}) => {
  const {options} = descriptors[route.key];
  const tab: Route | undefined = routes.find(r => r.name === route.name);

  if (!tab) return null;

  const isFocused = state.index === tabIndex;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // @ts-ignore
      navigation.navigate({name: route.name, merge: true});
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}>
      {tab.icon(isFocused)}
    </TouchableOpacity>
  );
};

const AppFooter = (props: BottomTabBarProps) => {
  return (
    <AppFooterContainer>
      {props.state.routes.map((route, index) => (
        <Tab route={route} tabIndex={index} key={index} {...props} />
      ))}
    </AppFooterContainer>
  );
};

export default AppFooter;
