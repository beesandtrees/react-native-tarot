import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

import Images from '../helpers/images.js';

// props - deck, reversed, value

export default class Card extends Component {
  constructor(props) {
    super(props);

    var ImageSet;
    switch(this.props.deck) {
      case 'Jean-Dodal':
        ImageSet = Images[1];
        break;
      default:
        ImageSet = Images[0];
    }

    let reversed = this.props.reversed === true ? 'reversed ' : '';
    let cardSearch = this.props.value.arcana === 'Major' ? "major" +
    this.props.value.image : this.props.value.suit + this.props.value.id;

    this.state = {
      image : ImageSet[cardSearch],
      cardStyles : [styles.image]
    };

    if(reversed) {
        this.state.cardStyles.push(styles.imageReverse)
    }

    if(this.props.size === 'large') {
        this.state.cardStyles.push(styles.imageLG)
    }
  }
  render() {
    return (
        <Image style={this.state.cardStyles} source={this.state.image} />
    )
  }
}

const styles = StyleSheet.create({
  image: {
      borderRadius: 3,
      flex: 1,
      height: ((wWidth*0.75)*0.25)*1.2,
      marginBottom: 10,
      marginLeft: 4,
      marginRight: 0,
      width: (wWidth*0.75)*0.17
  },
  imageLG: {
      borderRadius: 6,
      height: ((wHeight/360)-0.15)*360,
      margin: 3,
      width: (((wWidth*0.27)/210))*210
  },
  imageReverse: {
      transform: [{ rotate: '180deg'}]
  }
});
