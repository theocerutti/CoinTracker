import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './store/store';
import MainContainer from './containers/MainContainer';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './routes/RootNavigation';
import {ThemeProvider} from 'styled-components';
import {NativeBaseProvider} from 'native-base';
import {theme} from './theme';
import {themeSelector} from './slices/theme';
import RootRoutes from './routes/RootRoutes';
import {SafeAreaView} from 'react-native';

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const styledTheme = useSelector(themeSelector);

  return (
    <Provider store={store}>
      <MainContainer>
        <NavigationContainer ref={navigationRef}>
          <ThemeProvider theme={styledTheme}>
            <NativeBaseProvider theme={theme}>
              <SafeAreaView style={{flex: 1, overflow: 'hidden'}}>
                <RootRoutes />
              </SafeAreaView>
            </NativeBaseProvider>
          </ThemeProvider>
        </NavigationContainer>
      </MainContainer>
    </Provider>
  );
};
export default RootApp;
