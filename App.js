import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Router from './src/navigation/Router';
import { store, persistor } from './src/redux/store';
import Drawer from './src/navigation/Drawer';
import { StatusBar } from 'react-native';
import { colors } from './src/config';


export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle={"light-content"} backgroundColor={colors.primary} />
        <Router />
      </PersistGate>
    </Provider>
  );
};
