import React from 'react';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import {View} from 'react-native';

const AppContainer = (props: any) => {
  return (
    <View>
      <AppHeader />
      <div>{props.children}</div>
      <AppFooter />
    </View>
  );
};

export default AppContainer;
