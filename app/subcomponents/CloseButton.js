import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text
} from 'react-native';

import globalStyles from '../helpers/globalStyles.js';

export default class CloseButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          styles : [globalStyles.xButton]
      }
      if(this.props.white) {
          this.state.styles.push(styles.xButton);
      }
  }
  render() {
      return (
        <Text style={this.state.styles} onPress={this.props.GoBack}>&times;</Text>
      )
  }
}

const styles = StyleSheet.create({
  xButton: {
    color: 'white'
  }
});
