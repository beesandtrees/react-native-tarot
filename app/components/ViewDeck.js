import React, {Component} from 'react';
import {
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

import globalStyles from '../helpers/globalStyles.js';
import Images from '../helpers/images.js';
import Cards from '../helpers/cards.json';

import Card from '../subcomponents/Card';
import CloseButton from '../subcomponents/CloseButton';

export default class ViewDeck extends Component {
    constructor(props) {
        super(props);

        var deckName, deckDescription;

        switch(this.props.myDeck) {
          case 'Jean-Dodal':
            deckName = "Jean Dodal";
            deckDescription = "Marseilles style deck from Lyon circa 1701.";
            break;
          default:
            deckName = "Rider-Waite";
            deckDescription = "Illustrated by Patricia Coleman Smith in 1910, the Rider-Waite deck is incredibly popular.";
        }

        this.state = {
            images: this.renderPlaceholders(),
            deckName : deckName,
            deckDescription: deckDescription
        };
    }
    componentDidMount() {
      setTimeout(function() {
          this.setState({"images": this.renderImages(this.props.myDeck)});
      }.bind(this), 500);
    }
    GoBack() {
      this.props.navigator.pop();
    }
    renderPlaceholders() {
      var images = [];
      for (var i = 0; i < 12; i++) {
        images.push(
          <Image key={i} source={require('../images/misc/Rider-Waite-Back.png')} style={styles.image} />
        );
      }
      return images;
    }
    renderImages(currentDeck) {
      var images = [];
      for (var i = 0; i < Cards.length; i++) {
        let card = Cards[i];
        images.push(
            <Card key={i} index={i} value={card} deck={currentDeck} navigator={this.props.navigator} />
        );
      }
      return images;
    }
    render() {
        return (
            <View style={[globalStyles.fullView, styles.board]}>
              <StatusBar hidden={true} />
              <View style={[globalStyles.board, styles.board]}>
                <ScrollView
                  contentContainerStyle={styles.list}
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  showsVerticalScrollIndicator={true}
                  style={styles.scrollView}>
                      {this.state.images}
                </ScrollView>
              </View>
              <View style={[globalStyles.choices, styles.choices]}>
                  <Text style={[globalStyles.subHeading, globalStyles.whiteText, styles.heading]}>{this.state.deckName} Deck</Text>
                  <Text style={globalStyles.whiteText}>
                    {this.state.deckDescription}
                  </Text>
              </View>
              <CloseButton GoBack={() => this.GoBack()} white={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  board: {
      backgroundColor: '#FFFFFF',
  },
  choices: {
    backgroundColor: '#73436E',
  },
  heading: {
      marginBottom: 24
  },
  image: {
      backgroundColor: '#C391BE',
      borderRadius: 3,
      flex: 1,
      height: ((wWidth*0.75)*0.25)*1.2,
      marginBottom: 10,
      marginLeft: 4,
      marginRight: 0,
      width: (wWidth*0.75)*0.17
  },
  list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
  },
  scrollView: {
    height: wHeight*0.9,
    width: wWidth*0.55
  }
});
