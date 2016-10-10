import React, { Component } from 'react';
import {
    Navigator,
    TouchableHighlight,
    View
} from 'react-native';

import CardDetail from '../containers/CardDetail';

import CardImage from '../subcomponents/CardImage';

import Images from '../helpers/images.js';

export default class Card extends Component {
  constructor(props) {
    super(props);
    // must pass in layout so we can pass the size of the card
  }
  LoadDetail() {
      this.props.navigator.push({
        component: CardDetail,
        passProps: {
          deck: this.props.deck,
          value: this.props.value,
          reversed : this.props.reversed,
          position: this.props.position
        }
      });
  }
  render() {
    // must pass in layout so we can pass the size of the card
    return (
        <TouchableHighlight onPress={this.LoadDetail.bind(this)} underlayColor="transparent">
            <View>
              <CardImage layout={this.props.layout} deck={this.props.deck} reversed={this.props.reversed} value={this.props.value} />
            </View>
        </TouchableHighlight>
    )
  }
}
