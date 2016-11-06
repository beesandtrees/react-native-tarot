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

import Button from '../subcomponents/Button';
import Card from '../subcomponents/Card';
import CloseButton from '../subcomponents/CloseButton';

import Cards from '../helpers/cards.json';
import Spread from '../helpers/spread.json';

import globalStyles from '../helpers/globalStyles.js';

class BoardSpread extends Component {
  render() {
    if(this.props.spread === "Celtic-Cross") {
      return(
        <View style={styles.boardRelative}>
          <Text style={styles.rightText}>Tap card to see face. Tap again to see details.</Text>
          <View>
              {this.props.cards}
          </View>
        </View>
      )
    } else {
      return(
        <View style={styles.boardBasic}>
            <Text style={styles.bottomText}>Tap card to see face. Tap again to see details.</Text>
            {this.props.cards}
        </View>
      )
    }
  }
}

export default class Board extends Component {
    constructor(props) {
        super(props);

        var cardLength,
            reversed = this.props.reversed ? 0.1 : 0;

        switch(this.props.spread) {
          case 'Basic':
            cardLength = 10;
            break;
          case 'Celtic-Cross':
            cardLength = 10;
            break;
          case '5card':
            cardLength = 5;
            break;
          case '4card':
            cardLength = 4;
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
            orientation: 'landscape'
        };
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

        // which spread
        let spread = display > 3 ? 0 : 1;
        if(display === 1) {spread = 2;}

        for (var i = 0; i < allCards; i++) {

            // get a random number from the new array
            var random = Math.floor(Math.random() * cards.length);
            // choose whether or not the card is reversed
            var reversed = Math.random() < type ? true : false;
            // remove the random card from the new array
            // this is actually a double shuffle which maybe I shouldn't do?
            var card = cards.splice(random, 1)[0],
                name = card.name,
                position = Spread[spread][i];

            sections.push(
                <Card key={i} index={i} key={name} value={card} reversed={reversed} position={position} spread={this.props.spread} deck={deck} navigator={this.props.navigator} flipped={true} />
            );
        }
        return sections
    }
    render() {
        return (
            <View style={[globalStyles.fullView, styles.fullView]}>
                <StatusBar hidden={true} />
                <BoardSpread spread={this.props.spread} cards={this.state.sections} />
                <CloseButton white={true} GoBack={() => this.GoBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  fullView: {
     backgroundColor: '#737822',
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
      flex: 1,
      height:  wWidth*0.9,
      marginRight: 30,
      marginTop: 10,
      transform: [{ rotate: '90deg'}],
      width: wHeight,
  },
  bottomText: {
    color: '#FFFFFF',
    fontSize: 12,
    position: 'absolute',
    bottom: -15,
    left: 10
  },
  rightText: {
    color: '#FFFFFF',
    fontSize: 12,
    position: 'absolute',
    top: 10,
    left: 40
  }
});
