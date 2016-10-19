import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    Navigator,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

import Board from '../containers/Board';
import CardDetail from '../containers/CardDetail';
import ChooseDeck from '../containers/ChooseDeck';
import ChooseLayout from '../containers/ChooseLayout';

import Button from '../subcomponents/Button';
import Checkbox from '../subcomponents/Checkbox';

import Cards from '../helpers/cards.json';
import globalStyles from '../helpers/globalStyles.js';

export default class MenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reversed: false
        }
    }
    getValue() {
        var card = Cards.splice(Math.floor(Math.random() * Cards.length), 1)[0];
        return card;
    }
    LoadBoard(today) {
        if(today || this.props.layout === "Single") {
          if(today) {
            this.props.todaysCard();
          }

          var reversed = Math.random() < 0.1 ? true : false;

          this.props.navigator.push({
            component: CardDetail,
            passProps: {
              deck: this.props.deck,
              value: this.getValue(),
              reversed : reversed
            }
          });
        } else {
          this.props.navigator.push({
              component: Board
          });
        }
    }
    LoadChooseDeck() {
        this.props.navigator.push({component: ChooseDeck});
    }
    LoadChooseLayout() {
        this.props.navigator.push({component: ChooseLayout});
    }
    OpenInfoView() {
        this.props.navigator.push({component: HelpView});
    }
    render() {
        const { deck, layout, reversed } = this.props;

        let possible = reversed ? 'Possible' : 'None';

        var spread = "Basic";
        var deckClean = "Rider Waite";

        switch(this.props.deck) {
          case 'Rider-Waite':
            deckClean = "Waite-Colman Smith";
            break;
          case 'Jean-Dodal':
            deckClean = "Jean Dodal";
            break;
          default:
            deckClean = "Waite-Colman Smith";
        }

        switch(this.props.layout) {
          case 'Celtic-Cross':
            spread = "Celtic Cross";
            break;
          case '5card':
            spread = "5 Card";
            break;
          case '4card':
            spread = "4 Card";
            break;
          case 'Past-Present-Future':
            spread = "Past Present Future";
            break;
          case 'Single':
            spread = "Single";
            break;
          default:
            spread = "Past Present Future";
        }

        return (
            <View style={[globalStyles.fullView, styles.board]}>
                <StatusBar hidden={true}/>
                <View style={[globalStyles.board, styles.board]}>
                    <Text style={globalStyles.heading}>Create a Reading</Text>
                    <Button press={() => this.LoadBoard(true)} buttonText="Draw a Card" color="purple" />
                    <View style={[globalStyles.hr]}></View>
                    <Button press={() => this.LoadChooseDeck()} buttonText="Choose a Deck" color="purple" />
                    <Button press={() => this.LoadChooseLayout()} buttonText="Choose a Spread" color="purple" />
                    <View style={globalStyles.buttonIndent}>
                      <Checkbox MainAction={this.props.switchReversed.bind(null, !reversed)} small={true} labelText="Include Reversed Cards" color="purple" checked={reversed} />
                    </View>
                </View>
                <View style={[globalStyles.choices, styles.choices]}>
                    <Text style={globalStyles.heading}>Options</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Deck</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>{deckClean}</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Layout</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>{spread}</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Reversed Cards?</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>{possible}</Text>
                    <Button press={() => this.LoadBoard()} buttonText="Begin Reading" smaller={true} color="purple" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    board: {
      backgroundColor: '#AB76A4',
    },
    choices: {
      backgroundColor: '#73436E',
    },
    label: {
        top: 3
    }
});
