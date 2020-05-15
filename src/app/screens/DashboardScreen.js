import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class DashboardScreen extends Component {
  componentDidMount() {
    // fetch(
    //   'https://eibtest.southeastasia.cloudapp.azure.com/clientws/portfolio/overview/details',
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${this.props.route.params.accessToken}`,
    //     },
    //   },
    // )
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
