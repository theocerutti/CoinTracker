import React from 'react';
import {Login} from '../pages/auth/Login';
import {Register} from '../pages/auth/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authSelector} from '../slices/auth';
import {useSelector} from 'react-redux';
import AppRoutes from './AppRoutes';

export const Stack = createNativeStackNavigator();

const RootRoutes = (props: any) => {
  const auth = useSelector(authSelector);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth.isLogged ? (
        <Stack.Screen name="App" component={AppRoutes} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootRoutes;
