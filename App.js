import React from 'react';
import { SafeAreaView } from 'react-native';
import AppRouter from './src/router/AppRouter';

const App = () => {
  return (
    <SafeAreaView>
      <AppRouter />
    </SafeAreaView>
  );
};

export default App;
