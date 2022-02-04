import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './store/store';
import MainContainer from './containers/MainContainer';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './routes/RootNavigation';
import {themeSelector} from './store/slices/theme';
import RootRoutes from './routes/RootRoutes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {loadAppConfig} from './store/slices/appConfig';

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
                  background: theme.backgroundLevel3,
                  card: theme.backgroundLevel4,
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
