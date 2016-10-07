import React, {Component} from 'react';
import {
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

import globalStyles from '../helpers/globalStyles.js';
import DeckDetails from './DeckDetails';
import CloseButton from '../components/CloseButton';
import Checkbox from '../components/Checkbox';

export default class ChooseDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
          defaultSet : false
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('DefaultDeck').then((value) => {
            if(value !== null) {
                this.setState({'defaultSet' : value});
            } else {
                this.setState({'defaultSet' : false});
            }
        }).done();
    }
    GoBack() {
      this.props.navigator.pop();
    }
    LoadDetails() {
        this.props.navigator.push({
          component: DeckDetails,
          passProps: {
            value: this.props.value,
            reversed : this.props.reversed,
            position: this.props.position
          }
        });
    }
    SetAsDefault(deck) {
        let isSet = !this.state.defaultSet;
        console.log(isSet);
        this.setState({'defaultSet' : isSet});
        AsyncStorage.setItem('DefaultDeck', deck);
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
                    <Checkbox MainAction={() => this.LoadDetails()} InfoAction={() => this.LoadDetails()} labelText="Rider-Waite - 1910" />
                    <Checkbox MainAction={() => this.LoadDetails()} InfoAction={() => this.LoadDetails()} labelText="Jean Dodal - 1715" />
                </ScrollView>
                <View style={[globalStyles.hr]}></View>
                <Checkbox MainAction={() => this.SetAsDefault('Rider-Waite')} labelText="Set as Default" reversed={this.state.defaultSet} />
                <TouchableHighlight style={[globalStyles.button]} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, styles.choices, globalStyles.buttonIndent]}>Save Selection</Text>
                </TouchableHighlight>
              </View>
              <View style={[globalStyles.choices, styles.choices]}>
                  <Image style={styles.card} source={require('../images/MajorArcana/Fool.jpg')} />
              </View>
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
