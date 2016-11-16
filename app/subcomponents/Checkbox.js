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
          checkStyles: [],
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
          this.state.checkedStyles.push(styles.red)
          break;
      }
  }
  render() {
    if(this.props.checked === true) {
        this.state.checkStyles = this.state.checkedStyles;
    } else {
        this.state.checkStyles = [globalStyles.check]
    }

    if(this.props.InfoAction) {
      return (
        <View style={[globalStyles.checkbox]}>
            <View style={[globalStyles.label]}>
              <Text onPress={this.props.MainAction} style={this.state.checkStyles}></Text>
              <View style={globalStyles.labelText}>
                <Text style={[globalStyles.whiteText, styles.labelText]} onPress={this.props.MainAction}>{this.props.labelText}</Text>
              </View>
              <View style={globalStyles.info}>
                  <Text onPress={this.props.InfoAction}>
                    <Image style={globalStyles.infobtn} source={require('../images/misc/info-btn.png')} />
                  </Text>
              </View>
            </View>
        </View>
      )
    } else {
      return (
        <View style={[globalStyles.checkbox]}>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.MainAction}>
              <View style={[globalStyles.label]}>
                <View style={this.state.checkStyles}></View>
                <View style={globalStyles.labelText}>
                  <Text style={[globalStyles.whiteText, styles.labelText]}>{this.props.labelText}</Text>
                </View>
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
  labelText: {
      marginTop: 3,
      fontSize: 18,
  },
  red : {
    backgroundColor: '#57190C'
  },
  green : {
    backgroundColor: '#595C21'
  },
  blue : {
    backgroundColor: '#055575'
  },
  purple: {
    backgroundColor: '#23256B'
  },
  yellow: {
    backgroundColor: '#B38900'
  }
});
