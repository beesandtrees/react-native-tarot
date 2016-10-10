import React, {Component} from 'react';
import {
    Navigator,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

import Card from '../subcomponents/Card';
import CloseButton from '../subcomponents/CloseButton';

import Cards from '../helpers/cards.json';
import Layout from '../helpers/layout.json';

import globalStyles from '../helpers/globalStyles.js';

export default class Board extends Component {
    constructor(props) {
        super(props);

        var cardLength,
            reversed = this.props.reversed ? 0.4 : 0;

        switch(this.props.layout) {
          case 'Basic':
            cardLength = 10;
            break;
          case 'Celtic-Cross':
            cardLength = 10;
            break;
          case 'Past-Present-Future':
            cardLength = 3;
            break;
          case 'Single':
            cardLength = 1;
            break;
          default:
            cardLength = 10;
        }

        this.state = {
            sections: this.dealCards(cardLength, reversed, this.props.deck),
            boardLayout: [styles.boardBasic]
        };

        if(this.props.layout === 'Celtic-Cross') {
            this.state.boardLayout.push(styles.boardRelative)
        }
    }
    GoBack() {
      this.props.navigator.pop();
    }
    fisherYates(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }
    dealCards(display, type, deck) {
        // type should be an integer between 0 and 0.5
        // this will determine the frequency of reversed cards
        // new array of cards
        let sections = [];

        // create new array of all cards to manipulate
        let cards = this.fisherYates(Cards).slice(0);

        // this is the number of cards to return
        let allCards = display;

        // which layout
        let layout = display > 3 ? 0 : 1;
        if(display === 1) {layout = 2;}

        for (var i = 0; i < allCards; i++) {

            // get a random number from the new array
            var random = Math.floor(Math.random() * cards.length);
            // choose whether or not the card is reversed
            var reversed = Math.random() < type ? true : false;
            // remove the random card from the new array
            // this is actually a double shuffle which maybe I shouldn't do?
            var card = cards.splice(random, 1)[0],
                name = card.name,
                position = Layout[layout][i];

            sections.push(
                <Card key={i} index={i} key={name} value={card} reversed={reversed} position={position} layout={this.props.layout} deck={deck} navigator={this.props.navigator} />
            );
        }
        return sections
    }
    render() {
        return (
            <View style={[globalStyles.fullView, styles.fullView]}>
                <StatusBar hidden={true} />
                <Text style={styles.topText}>Click cards to see details</Text>
                <View style={this.state.boardLayout}>
                    {this.state.sections}
                </View>
                <CloseButton GoBack={() => this.GoBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  fullView: {
     backgroundColor: '#ffffff',
  },
  boardBasic: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      marginLeft: 15,
      marginTop: 30,
      width: wWidth*0.8
  },
  boardRelative: {
      position: 'relative'
  },
  topText: {
    position: 'absolute',
    top: 10,
    left: 30
  }
});
