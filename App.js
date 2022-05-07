import { StoreProvider } from 'easy-peasy';
import React from 'react';
import AppRouter from './src/router/AppRouter';
import store from './src/store/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppRouter />
    </StoreProvider>
  );
};

export default App;
