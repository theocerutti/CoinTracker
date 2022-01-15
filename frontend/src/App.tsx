import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './store/store';
import MainContainer from './containers/MainContainer';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './routes/RootNavigation';
import {themeSelector} from './store/slices/theme';
import RootRoutes from './routes/RootRoutes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const {theme, themeType} = useSelector(themeSelector);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer
            theme={{
              dark: themeType === 'dark',
              colors: {
                ...DefaultTheme.colors,
                primary: theme.backgroundLevel1,
                background: theme.backgroundLevel2,
                card: theme.backgroundLevel3,
                text: theme.textPrimary,
                border: theme.border,
                notification: theme.infoPrimary,
              },
            }}
            ref={navigationRef}>
            <MainContainer>
              <SafeAreaView style={{flex: 1, overflow: 'hidden'}}>
                <RootRoutes />
              </SafeAreaView>
            </MainContainer>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
export default RootApp;
