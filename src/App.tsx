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
import {QueryClient, QueryClientProvider} from 'react-query';
import Coinbase from './exchanges/Coinbase';
import ccxt from 'ccxt';
import {Cashify} from 'cashify';
import {cashifyRates} from './types/cashify';

export const coinbase = new Coinbase({
  apiKey: '9nXxZtkhQinEA6fe',
  secret: 'CRbgFPeqqO5fnfigPceyXRSVlKGsAwra',
  timeout: 30000,
  enableRateLimit: true,
});

export const cashify = new Cashify({base: 'USD', rates: cashifyRates});

export const globalExchange = new ccxt.binance();

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: true,
      },
    },
  });
  const {theme, themeType} = useSelector(themeSelector);

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
