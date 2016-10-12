import React, {Component} from 'react';
import {Navigator, StyleSheet, TouchableHighlight, View} from 'react-native';

import CardDetail from '../containers/CardDetail';

import CardImage from '../subcomponents/CardImage';

import Images from '../helpers/images.js';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: []
        }

        if (this.props.layout === 'Celtic-Cross') {
            this.state.position.push(styles.imageAbsolute);
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

    }
    LoadDetail() {
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
    render() {
        // must pass in layout so we can pass the size of the card
        return (
            <TouchableHighlight style={this.state.position} onPress={this.LoadDetail.bind(this)} underlayColor="transparent">
                <View>
                    <CardImage layout={this.props.layout} deck={this.props.deck} reversed={this.props.reversed} value={this.props.value}/>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    imageAbsolute: {
      left: 0,
      position: 'absolute',
      top: 0,
      height: 100,
      width: 52      
    },
    image0: {
      left: 105,
      top: 110
    },
    image1: {
      left: 180,
      top: 130,
      transform: [{ rotate: '90deg'}],
      zIndex: 2
    },
    image2: {
      left: 105,
      top: 220
    },
    image3: {
      left: 0,
      top: 110
    },
    image4: {
      left: 105,
      top: 0
    },
    image5: {
      left: 210,
      top: 110
    },
    image6: {
      left: 280,
      top: 0
    },
    image7: {
      left: 320,
      top: 75
    },
    image8: {
      left: 360,
      top: 150
    },
    image9: {
      left: 400,
      top: 220
    }
});
