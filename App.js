import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/modules/store';
import { Touchable } from './src/Components/Counter/Component';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Touchable/>
      </Provider>
    );
  }
}