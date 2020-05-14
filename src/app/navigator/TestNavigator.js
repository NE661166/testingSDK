import React from 'react';
import ViewA from '../views/ViewA';
import ViewB from '../views/ViewB';
import {createStackNavigator} from '@react-navigation/stack';
// authentication views

const Stack = createStackNavigator();

export const TestNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="A"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="A" component={ViewA} options={{title: 'A'}} />
      <Stack.Screen name="B" component={ViewB} initialParams={{user: 'B'}} />
    </Stack.Navigator>
  );
}
