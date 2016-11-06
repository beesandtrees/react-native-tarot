import React, {Component} from 'react';
import {Navigator, StyleSheet, TouchableOpacity, View} from 'react-native';

import CardDetail from '../containers/CardDetail';

import CardImage from '../subcomponents/CardImage';

import Images from '../helpers/images.js';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flipped: this.props.flipped,
            position: []
        }

        if (this.props.spread === 'Celtic-Cross') {
            this.state.position.push([styles.imageAbsolute, styles.imageBorder]);
            switch (this.props.index) {
                case 0:
                    this.state.position.push(styles.image0);
                    break;
                case 1:
                    this.state.position.push(styles.image1);
                    break;
                case 2:
                    this.state.position.push(styles.image2);
                    break;
                case 3:
                    this.state.position.push(styles.image3);
                    break;
                case 4:
                    this.state.position.push(styles.image4);
                    break;
                case 5:
                    this.state.position.push(styles.image5);
                    break;
                case 6:
                    this.state.position.push(styles.image6);
                    break;
                case 7:
                    this.state.position.push(styles.image7);
                    break;
                case 8:
                    this.state.position.push(styles.image8);
                    break;
                case 9:
                    this.state.position.push(styles.image9);
                    break;
                default:
                    break;
            }
        }

        if (this.props.spread === 'Single') {
          this.state.position.push(styles.imageBorder);
        }

        if (this.props.spread === 'Past-Present-Future' || this.props.spread === '4card' || this.props.spread === '5card') {
          this.state.position.push([styles.imageBorder, styles.biggerRadius]);
        }

    }
    LoadDetail() {
      if(this.state.flipped) {
        this.setState({"flipped": false});
      } else {
        this.props.navigator.push({
            component: CardDetail,
            passProps: {
                deck: this.props.deck,
                value: this.props.value,
                reversed: this.props.reversed,
                position: this.props.position
            }
        });
      }
    }
    render() {
        // if flipped show card else show back
        return (
            <TouchableOpacity style={this.state.position} onPress={this.LoadDetail.bind(this)} underlayColor="transparent">
                <View>
                    <CardImage spread={this.props.spread} deck={this.props.deck} reversed={this.props.reversed} value={this.props.value} flipped={this.state.flipped} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    imageBorder: {
      borderColor: '#ffffff',
      borderRadius: 3,
      borderWidth: 2,
      marginBottom: 10
    },
    biggerRadius: {
      borderRadius: 6,
      borderWidth: 3,
    },
    imageAbsolute: {
      left: 0,
      position: 'absolute',
      top: 0,
      height: 104,
      width: 56
    },
    image0: {
      left: 128,
      top: 220
    },
    image1: {
      left: 125,
      top: 215,
      transform: [{ rotate: '90deg'}],
      zIndex: 2
    },
    image2: {
      left: 128,
      top: 340
    },
    image3: {
      left: 40,
      top: 220
    },
    image4: {
      left: 128,
      top: 100
    },
    image5: {
      left: 210,
      top: 220
    },
    // STAFF
    image6: {
      left: 280,
      top: 40
    },
    image7: {
      left: 280,
      top: 160
    },
    image8: {
      left: 280,
      top: 280
    },
    image9: {
      left: 280,
      top: 400
    }
});
