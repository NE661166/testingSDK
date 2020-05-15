import React, {PureComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'testapp/src/app/screens/LoginScreen';
import DashboardScreen from 'testapp/src/app/screens/DashboardScreen';
import NavigationHeader from 'testapp/src/app/components/NavigationHeader';

const Stack = createStackNavigator();

class TestNavigator extends PureComponent {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: false,
          header: () => <NavigationHeader />,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    );
  }
}

export default TestNavigator;
