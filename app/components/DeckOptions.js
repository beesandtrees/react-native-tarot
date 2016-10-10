import React, {Component} from 'react';
import {
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

import globalStyles from '../helpers/globalStyles.js';
import DeckDetails from '../containers/DeckDetails';
import CloseButton from '../subcomponents/CloseButton';
import Checkbox from '../subcomponents/Checkbox';

class DeckCard extends Component {
  render() {
      switch (this.props.deck) {
        case 'Rider-Waite' :
          return (
            <View style={[globalStyles.choices, styles.choices]}>
                <Image style={styles.card} source={require('../images/Rider/MajorArcana/Fool.jpg')} />
            </View>
          )
        case 'Jean-Dodal' :
          return (
            <View style={[globalStyles.choices, styles.choices]}>
                <Image style={styles.card} source={require('../images/Dodal/MajorArcana/Fool.jpg')} />
            </View>
          )
        default:
          return (
            <View style={[globalStyles.choices, styles.choices]}>
                <Image style={styles.card} source={require('../images/Rider/MajorArcana/Fool.jpg')} />
            </View>
          )
      }
  }
}

export default class ChooseDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
          defaultSet : false
        }
    }
    GoBack() {
      this.props.navigator.pop();
    }
    LoadDetails(clickedDeck) {
        this.props.navigator.push({
          component: DeckDetails,
          passProps: {
            value: this.props.value,
            myDeck: clickedDeck
          }
        });
    }
    SetAsDefault(deck) {
        let isSet = !this.state.defaultSet;
        this.setState({'defaultSet' : isSet});
        // TODO -- need to add this to redux state
        // AsyncStorage.setItem('DefaultDeck', deck);
    }
    render() {
        return (
            <View style={[globalStyles.fullView, styles.board]}>
              <StatusBar hidden={true} />
              <View style={[globalStyles.board, styles.board]}>
                <Text style={[globalStyles.heading, styles.heading]}>Choose a Deck</Text>
                <ScrollView
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  showsVerticalScrollIndicator={true}
                  style={styles.scrollView}>
                    <Checkbox MainAction={this.props.chooseDeck.bind(null, 'Rider-Waite')} InfoAction={this.LoadDetails.bind(this,'Rider-Waite')} labelText="Rider-Waite - 1910" checked={this.props.deck === 'Rider-Waite'} color="purple" />
                    <Checkbox MainAction={this.props.chooseDeck.bind(null, 'Jean-Dodal')} InfoAction={this.LoadDetails.bind(this, 'Jean-Dodal')} labelText="Jean Dodal - 1715" checked={this.props.deck === 'Jean-Dodal'} color="purple" />
                </ScrollView>
                <View style={[globalStyles.hr]}></View>
                <Checkbox MainAction={() => this.SetAsDefault('Rider-Waite')} labelText="Set as Default" checked={this.state.defaultSet} color="blue" />
                <TouchableHighlight style={[globalStyles.button]} underlayColor="transparent" onPress={() => this.GoBack()}>
                    <Text style={[globalStyles.buttonText, styles.choices, globalStyles.buttonIndent]}>Save Selection</Text>
                </TouchableHighlight>
              </View>
              <DeckCard deck={this.props.deck} />
              <CloseButton GoBack={() => this.GoBack()} white={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  board: {
      backgroundColor: '#C391BE',
  },
  choices: {
    backgroundColor: '#73436E',
  },
  heading: {
      marginBottom: 24
  },
  card: {
    height: wHeight*0.9,
    width: (wWidth*0.4)*0.7
  },
  scrollView: {
    height: wHeight*0.3,
    width: 300
  }
});