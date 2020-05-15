import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {sha256} from 'react-native-sha256';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '670916106191',
      password: 'Ifast123!',
    };
  }

  onLogin() {
    const {password, username} = this.state;

    sha256(password).then(hash => {
      fetch(
        'https://eibtest.southeastasia.cloudapp.azure.com/clientws/oauth/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: hash,
            username,
          }),
        },
      )
        .then(response => response.json())
        .then(json => {
          if (json.success) {
            this.props.navigation.navigate('Dashboard', {
              accessToken: json.data.access_token,
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({username})}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
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
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
