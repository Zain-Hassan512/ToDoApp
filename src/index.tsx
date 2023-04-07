import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {MainScreen} from './screens';
const index = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default index;
