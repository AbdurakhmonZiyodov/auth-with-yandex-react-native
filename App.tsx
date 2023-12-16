import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import {useYandexAuth} from './hooks/useYandexAuth';

function App() {
  const {handler} = useYandexAuth();

  return (
    <SafeAreaView style={[styles.container]}>
      <Button title="yandex login" onPress={handler.onLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
