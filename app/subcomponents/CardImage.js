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
      imageFace : ImageSet[cardSearch],
      image: require('../images/misc/Basic-Back.LG.png'),
      cardStyles : [styles.image]
    };

    if(this.props.deck === 'Jean-Dodal') {
      this.state.image = require('../images/misc/Dodal-Back.LG.png');
    }

    if(reversed) {
        this.state.cardStyles.push(styles.imageReverse)
    }

    if(this.props.size === 'large') {
        this.state.cardStyles.push(styles.imageLG)
    }
    if(this.props.spread === 'Past-Present-Future') {
        this.state.cardStyles.push(styles.imageMD)
    }
    if(this.props.spread === 'Celtic-Cross') {
        this.state.cardStyles.push([styles.imageSM, styles.imageAbsolute])
    }

    if(this.props.spread === undefined) {
      this.state.cardStyles.push(styles.addMargin)
    }

    if(!this.props.flipped) {
      this.state.image = this.state.imageFace;
    }

  }
  componentWillReceiveProps() {
    if(this.props.flipped) {
      this.setState({"image": this.state.imageFace});
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
      margin: 0,
      width: (wWidth*0.75)*0.17
  },
  imageSM: {
    borderRadius: 3,
    height: 100,
    width: 52
  },
  imageMD: {
    borderRadius: 6,
    height: (wWidth*0.22)*1.8,
    width: (wWidth*0.22)
  },
  imageLG: {
    borderRadius: 6,
    height: ((wHeight/360)-0.15)*360,
    margin: 3,
    width: (((wWidth*0.27)/210))*210
  },
  addMargin: {
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 0
  },
  imageReverse: {
      transform: [{ rotate: '180deg'}]
  },
  imageAbsolute: {
    left: 0,
    position: 'absolute',
    top: 0
  }
});
