import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';

const middleware = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});
export default store;
