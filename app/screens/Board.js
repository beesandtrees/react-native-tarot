import React, {Component} from 'react';
import {
    Animated,
    AppRegistry,
    AsyncStorage,
    Image,
    Navigator,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

import Card from '../components/Card';
// import Position from './components/Positions';
import Controls from '../components/Controls';

import Cards from '../helpers/cards.json';
import Layout from '../helpers/layout.json';

import globalStyles from '../helpers/globalStyles.js';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: this.dealCards(this.props.cards, this.props.random)
        };
    }
    GoBack() {
      // create function to allow players to continue by dismissing modal
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
    dealCards(display, type) {
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
                <Card key={i} index={i} key={name} value={card} reversed={reversed} position={position} navigator={this.props.navigator} />
            );
        }
        return sections
    }
    render() {
        return (
            <View style={[globalStyles.fullView, styles.fullView]}>
                <StatusBar hidden={true} />
                <View style={[globalStyles.board, styles.board]}>
                    {this.state.sections}
                </View>
                <Text style={[globalStyles.xButton]} onPress={this.GoBack.bind(this)}>&times;</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  fullView: {
     backgroundColor: '#ffffff',
  },
  board: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: wWidth*0.8
  },
  image: {
      backgroundColor: '#69B1CF',
      borderRadius: 3,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: ((wWidth*0.75)*0.25)*1.3,
      marginBottom: 10,
      marginRight: 5,
      padding: 5,
      width: (wWidth*0.75)*0.17
  },
  imageText: {
      color: 'white',
      textAlign: 'center'
  }
});
