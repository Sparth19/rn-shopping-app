import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './App/Navigation/MainNavigator';
import {Provider} from 'react-redux';
import store from './App/Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
