import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import globalStyles from '../helpers/globalStyles.js';

// need to be able to set checked/ unchecked prop on these

export default class Checkbox extends Component {
  constructor(props) {
      super(props);
      this.state = {
          styles : [globalStyles.whiteText, globalStyles.labelText],
          checkStyles : []
      }
      if(this.props.small) {
          this.state.styles.push(styles.smallLabel);
      }
  }
  render() {
    if(this.props.reversed === true) {
        this.state.checkStyles = [globalStyles.check, styles.checked];
    } else {
        this.state.checkStyles = [globalStyles.check];
    }
    if(this.props.InfoAction) {
      return (
        <View style={[globalStyles.checkbox]}>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.MainAction} style={[globalStyles.label]}>
              <View>
                <View style={[globalStyles.check]}></View>
                <Text style={this.state.styles}>{this.props.labelText}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyles.info} onPress={this.props.InfoAction} underlayColor="transparent">
                <Image style={globalStyles.infobtn} source={require('../images/misc/info-btn.png')} />
            </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={[globalStyles.checkbox]}>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.MainAction} style={[globalStyles.label]}>
              <View>
                <View style={this.state.checkStyles}></View>
                <Text style={this.state.styles}>{this.props.labelText}</Text>
              </View>
            </TouchableHighlight>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  smallLabel: {
    fontSize: 18,
    marginTop: 4
  },
  checked : {
    backgroundColor: 'rgba(255,255,255,0.4)'
  }
});
