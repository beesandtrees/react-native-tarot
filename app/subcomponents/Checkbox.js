import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import globalStyles from '../helpers/globalStyles.js';

export default class Checkbox extends Component {
  constructor(props) {
      super(props);

      this.state = {
          styles : [globalStyles.whiteText, globalStyles.labelText],
          checkStyles : [],
          checkedStyles : [globalStyles.check]
      }
      if(this.props.small) {
          this.state.styles.push(styles.smallLabel);
      }

      switch(this.props.color) {
        case 'red':
          this.state.checkedStyles.push(styles.red)
          break;
        case 'green':
          this.state.checkedStyles.push(styles.green)
          break;
        case 'purple':
          this.state.checkedStyles.push(styles.purple)
          break;
        case 'blue':
          this.state.checkedStyles.push(styles.blue)
          break;
        case 'yellow':
          this.state.checkedStyles.push(styles.yellow)
          break;
        default:
          this.state.checkedStyles.push(styles.checked)
          break;
      }
  }
  render() {
    if(this.props.checked === true) {
        this.state.checkStyles = this.state.checkedStyles
    } else {
        this.state.checkStyles = [globalStyles.check]
    }

    if(this.props.InfoAction) {
      return (
        <View style={[globalStyles.checkbox]}>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.MainAction} style={[globalStyles.label]}>
              <View>
                <View style={this.state.checkStyles}></View>
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
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  red : {
    backgroundColor: '#D52B08'
  },
  green : {
    backgroundColor: '#737822'
  },
  blue : {
    backgroundColor: '#356D83'
  },
  purple: {
    backgroundColor: '#73436E'
  },
  yellow: {
    backgroundColor: '#B99A10'
  }

});
