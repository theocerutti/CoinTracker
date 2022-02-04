import React, {useEffect} from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './store/store';
import MainContainer from './containers/MainContainer';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './routes/RootNavigation';
import {themeSelector} from './store/slices/theme';
import RootRoutes from './routes/RootRoutes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useDispatch} from 'react-redux';
import {loadAppConfig} from './store/slices/appConfig';
import {Cashify} from 'cashify';
import {cashifyRates} from './types/cashify';

export const cashify = new Cashify({base: 'USD', rates: cashifyRates});

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const dispatch = useDispatch();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: true,
      },
    },
  });
  const {theme, themeType} = useSelector(themeSelector);

  useEffect(() => {
    dispatch(loadAppConfig());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </Provider>
  );
};
export default RootApp;
