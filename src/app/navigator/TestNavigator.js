import React from 'react';
// import {View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import NavigationHeader from 'testapp/src/app/components/NavigationHeader';
import LoginScreen from 'testapp/src/app/screens/LoginScreen';
import DashboardScreen from 'testapp/src/app/screens/DashboardScreen';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//           color="#841584"
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    Dashboard: DashboardScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      gestureEnabled: false,
      header: () => <NavigationHeader />,
    },
  },
);

export const TestNavigator = () => {
  return <RootStack />;
};
