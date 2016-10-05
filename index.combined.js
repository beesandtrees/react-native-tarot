import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import Options from './app/screens/Options.js';

export default class MainView extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name: 'Options', component: Options}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              if (route.component) {
                return React.createElement(route.component, { ...this.props, ...route.passProps, navigator, route } );
              }
          }}
       />
    );
  }
}
