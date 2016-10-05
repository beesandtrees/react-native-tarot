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

import Board from './Board';
import ChooseDeck from './ChooseDeck';
import ChooseLayout from './ChooseLayout';

import Checkbox from '../components/Checkbox';

import globalStyles from '../helpers/globalStyles.js';

export default class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
          reversed : false
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('IncludeReversed').then((value) => {
            if(value !== null) {
                this.setState({'reversed' : value});
            } else {
                this.setState({'reversed' : false});
            }
        }).done();
    }
    LoadBoard(cards, random) {
        this.props.navigator.push({
          component: Board,
          passProps: {
            cards: cards,
            random: random
          }
        });
    }
    LoadChooseDeck() {
        this.props.navigator.push({
          component: ChooseDeck
        });
    }
    LoadChooseLayout() {
        this.props.navigator.push({
          component: ChooseLayout
        });
    }
    OpenInfoView() {
        this.props.navigator.push({
          component: HelpView
        });
    }
    IncludeReversed() {
      let newReversal = !this.state.reversed;
      this.setState({'reversed' : newReversal});
      // AsyncStorage.setItem('IncludeReversed', newReversal);
    }
    render() {
        return (
            <View style={globalStyles.fullView}>
              <StatusBar hidden={true} />
              <View style={globalStyles.board}>
                <Text style={globalStyles.heading}>Today&#39;s Reading</Text>
                <TouchableHighlight style={[globalStyles.button]} onPress={() => this.LoadBoard(1, 0)} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonIndent]}>Today&#39;s Card</Text>
                </TouchableHighlight>
                <View style={[globalStyles.hr]}></View>
                <TouchableHighlight style={[globalStyles.button]} onPress={this.LoadChooseDeck.bind(this)} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonIndent]}>Choose a Deck</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[globalStyles.button]} onPress={this.LoadChooseLayout.bind(this)} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonIndent]}>Choose a Layout</Text>
                </TouchableHighlight>
                <Checkbox MainAction={() => this.IncludeReversed()} small={true} labelText="Include Reversed Cards" reversed={this.state.reversed} />
              </View>
              <View style={[globalStyles.choices, globalStyles.backgroundRed]}>
                <Text style={globalStyles.heading}>Options</Text>
                <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Deck</Text>
                <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>Rider-Waite</Text>
                <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Layout</Text>
                <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>Celtic Cross</Text>
                <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Reversed Cards?</Text>
                <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>Possible</Text>
                <TouchableHighlight style={[globalStyles.button]} onPress={() => this.LoadBoard(10, 0)} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonChoices]}>Begin Reading</Text>
                </TouchableHighlight>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  label: {
      top: 3
  }
});
