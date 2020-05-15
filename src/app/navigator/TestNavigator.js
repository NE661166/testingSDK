import React, {PureComponent} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Flex} from '@ant-design/react-native';
import ViewA from '../views/ViewA';
import ViewB from '../views/ViewB';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'testapp/src/app/screens/LoginScreen';
import DashboardScreen from 'testapp/src/app/screens/DashboardScreen';
import theme from '../utils/styles';
// authentication views

const Stack = createStackNavigator();

const guidelineBaseWidth = 320;
const {width, height} = Dimensions.get('window');
const scale = (size, factor = 0.5) =>
  size + ((width / guidelineBaseWidth) * size - size) * factor;

class TestNavigator extends PureComponent {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: false,
          headerStyle: theme.headerStyle,
          header: () => {
            return (
              <View>
                <View style={{backgroundColor: 'white'}}>
                  <Flex marginTop={scale(28)} direction="column">
                    <Image
                      source={require('../img/logo_main.jpg')}
                      style={{
                        width: scale(128),
                        height: scale(68),
                        resizeMode: 'contain',
                        marginLeft: scale(10),
                        marginTop: scale(10),
                        marginBottom: scale(10),
                      }}
                    />
                  </Flex>
                </View>
              </View>
            );
          },
        }}>
        <Stack.Screen name="A" component={ViewA} options={{title: 'A'}} />
        <Stack.Screen name="B" component={ViewB} initialParams={{user: 'B'}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    );
  }
}

export default TestNavigator;
