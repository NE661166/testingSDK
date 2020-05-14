/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import ViewA from './src/app/views/ViewA';
import ViewB from './src/app/views/ViewB';
import {createStackNavigator} from '@react-navigation/stack';
import {TestNavigator} from './src/app/navigator/TestNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="A"
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen name="A" component={ViewA} options={{title: 'A'}} />
      <Stack.Screen name="B" component={ViewB} initialParams={{user: 'B'}} />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={TestNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
