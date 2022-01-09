import React from 'react';
import {Authentication} from '../pages/Authentication';
import {Home} from '../pages/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authSelector} from '../slices/auth';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const MainRouteContainer = (props: any) => {
  const auth = useSelector(authSelector);

  return (
    <Stack.Navigator>
      {auth.isLogged ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Auth" component={Authentication} />
      )}
    </Stack.Navigator>
  );
};
