import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  requireNativeComponent,
} from 'react-native';

import {useYandexAuth} from './hooks/useYandexAuth';

const CoolWebView = requireNativeComponent('CoolWebView');
function App() {
  const {handler} = useYandexAuth();

  return (
    <SafeAreaView style={[styles.container]}>
      <Button title="yandex login" onPress={handler.onLogin} />

      <CoolWebView style={styles.view} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    width: 200,
    height: 200,
  },
});

export default App;
