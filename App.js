import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './App/Store/store';
import AppNavigator from './App/Navigation/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import AppLoader from './App/Components/AppLoader';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoader />} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
