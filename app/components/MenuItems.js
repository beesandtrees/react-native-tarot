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
import ChooseDeck from '../containers/ChooseDeck';
import ChooseLayout from '../containers/ChooseLayout';

import Checkbox from '../subcomponents/Checkbox';

import globalStyles from '../helpers/globalStyles.js';

export default class MenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reversed: false
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('IncludeReversed').then((value) => {
            if (value !== null) {
                this.setState({'reversed': value});
            } else {
                this.setState({'reversed': false});
            }
        }).done();
    }
    LoadBoard(today) {
        if(today) {
          this.props.todaysCard();
        }
        this.props.navigator.push({
            component: Board
        });
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

        let possible = reversed ? 'Possible' : 'None'

        return (
            <View style={globalStyles.fullView}>
                <StatusBar hidden={true}/>
                <View style={globalStyles.board}>
                    <Text style={globalStyles.heading}>Today&#39;s Reading</Text>
                    <TouchableHighlight style={[globalStyles.button]} onPress={() => this.LoadBoard(true)} underlayColor="transparent">
                        <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonIndent]}>Today&#39;s Card</Text>
                    </TouchableHighlight>
                    <View style={[globalStyles.hr]}></View>
                    <TouchableHighlight style={[globalStyles.button]} onPress={this.LoadChooseDeck.bind(this)} underlayColor="transparent">
                        <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonIndent]}>Choose a Deck</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[globalStyles.button]} onPress={this.LoadChooseLayout.bind(this)} underlayColor="transparent">
                        <Text style={[globalStyles.buttonText, globalStyles.backgroundRed, globalStyles.buttonIndent]}>Choose a Layout</Text>
                    </TouchableHighlight>
                    <Checkbox MainAction={this.props.switchReversed.bind(null, !reversed)} small={true} labelText="Include Reversed Cards" color='red' checked={reversed} />
                </View>
                <View style={[globalStyles.choices, globalStyles.backgroundRed]}>
                    <Text style={globalStyles.heading}>Options</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Deck</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>{deck}</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Layout</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>{layout}</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.subHeading]}>Reversed Cards?</Text>
                    <Text style={[globalStyles.whiteText, globalStyles.choiceText]}>{possible}</Text>
                    <TouchableHighlight style={[globalStyles.button]} onPress={() => this.LoadBoard()} underlayColor="transparent">
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
