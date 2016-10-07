import React, { Component } from 'react';
import {
    Animated,
    AppRegistry,
    Image,
    Navigator,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

import CardDetail from '../containers/CardDetail';

import Images from '../helpers/images.js';

export default class Card extends Component {
  constructor(props) {
    super(props);

    let reversed = this.props.reversed === true ? 'reversed ' : '';
    let thisCard = 'card-' + this.props.index;
    let cardSearch = this.props.value.arcana === 'Major' ? "major" +
    this.props.value.image : this.props.value.suit + this.props.value.id;

    this.state = {
      isOpen : false,
      image : this.props.value.arcana === 'Minor' ? Images[0][cardSearch] :
      Images[0][cardSearch],
      cardStyles : [styles.image]
    };

    if(reversed) {
        this.state.cardStyles.push(styles.imageReverse)
    }
  }
  LoadDetail() {
      this.props.navigator.push({
        component: CardDetail,
        passProps: {
          value: this.props.value,
          reversed : this.props.reversed,
          position: this.props.position
        }
      });
  }
  render() {
    return (
      <View style={this.state.cardStyles}>
        <TouchableHighlight onPress={this.LoadDetail.bind(this)} underlayColor="transparent">
            <Image style={styles.image} source={this.state.image} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
      borderRadius: 3,
      flex: 1,
      height: ((wWidth*0.75)*0.25)*1.3,
      marginBottom: 10,
      marginLeft: 4,
      marginRight: 0,
      width: (wWidth*0.75)*0.18
  },
  imageReverse: {
      transform: [{ rotate: '180deg'}]
  }
});
