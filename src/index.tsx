import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {MainScreen} from './screens';
import Routes from './routes';
const index = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default index;
