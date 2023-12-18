import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import VKLogin from 'react-native-vkontakte-login';
import {vkConfig} from '../config';

export default class VKAuthentication extends Component {
  componentDidMount(): void {
    VKLogin.initialize(vkConfig.appID);
  }

  onLogin = async () => {
    try {
      const isLoggedIn = await VKLogin.isLoggedIn();
      const auth = await VKLogin.login(['friends', 'photos', 'email']);
      console.log({
        accessToken: auth.access_token,
        isLoggedIn,
      });
      const shareResponse = await VKLogin.share({
        linkText: 'Cool site',
        linkUrl: 'https://news.ycombinator.com/',
        description: 'Check out this cool site!',
        image: 1,
      });
    } catch (err) {
      console.log({error: err});
    }
  };

  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.center}>VKAuthentication</Text>

        <Button title="login with VKontakte" onPress={this.onLogin} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
    fontSize: 22,
    paddingVertical: 10,
  },
});
