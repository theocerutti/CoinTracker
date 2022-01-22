import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppRoutes from './AppRoutes';

export const Stack = createNativeStackNavigator();

const RootRoutes = (props: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="App" component={AppRoutes} />
    </Stack.Navigator>
  );
};

export default RootRoutes;
