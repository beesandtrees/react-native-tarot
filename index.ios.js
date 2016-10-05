/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MainView from './index.combined';

class tarot extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

AppRegistry.registerComponent('tarot', () => tarot);
