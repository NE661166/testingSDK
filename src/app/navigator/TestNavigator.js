import React from 'react';
import ViewA from '../views/ViewA';
import ViewB from '../views/ViewB';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'testapp/src/app/screens/LoginScreen';
import DashboardScreen from 'testapp/src/app/screens/DashboardScreen';
// authentication views

const Stack = createStackNavigator();

export const TestNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="A" component={ViewA} options={{title: 'A'}} />
      <Stack.Screen name="B" component={ViewB} initialParams={{user: 'B'}} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};
