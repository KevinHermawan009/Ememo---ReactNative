/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Routes from './src/navigation/routes';
import { Provider } from 'react-redux';
import configureStore from './src/Redux/Store'


const ScreenHeight = Dimensions.get("window").height
const ScreenWidth = Dimensions.get("window").width

const store = configureStore()
console.disableYellowBox = true;
export default class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <Routes />
      </Provider>
    );
  }
}