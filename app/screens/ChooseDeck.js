import React, {Component} from 'react';
import {
    AppRegistry,
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

export default class ChooseDeck extends Component {
    constructor(props) {
        super(props);
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
                    <View style={[globalStyles.checkbox]}>
                        <View style={[globalStyles.check]}></View>
                        <TouchableHighlight underlayColor="transparent"  style={[globalStyles.label]}>
                          <View>
                            <Text style={[globalStyles.whiteText, globalStyles.labelText]}>Rider-Waite - 1910</Text>
                            <TouchableHighlight style={styles.info} onPress={this.LoadDetails.bind(this)} underlayColor="transparent">
                                <Image style={styles.infobtn} source={require('../images/misc/info-btn.png')} />
                            </TouchableHighlight>
                          </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[globalStyles.checkbox]}>
                        <View style={[globalStyles.check]}></View>
                        <TouchableHighlight underlayColor="transparent"  style={[globalStyles.label]}>
                          <View>
                            <Text style={[globalStyles.whiteText, globalStyles.labelText]}>Jean Dodal - 1715</Text>
                            <TouchableHighlight style={styles.info} onPress={this.LoadDetails.bind(this)} underlayColor="transparent">
                                <Image style={styles.infobtn} source={require('../images/misc/info-btn.png')} />
                            </TouchableHighlight>
                          </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                <View style={[globalStyles.hr]}></View>
                <View style={[globalStyles.checkbox]}>
                    <View style={[globalStyles.check]}></View>
                    <TouchableHighlight underlayColor="transparent"  style={[globalStyles.label]}>
                        <Text style={[globalStyles.whiteText, globalStyles.labelText]}>Set as Default</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={[globalStyles.button]} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, styles.choices, globalStyles.buttonIndent]}>Save Selection</Text>
                </TouchableHighlight>
              </View>
              <View style={[globalStyles.choices, styles.choices]}>
                  <Image style={styles.card} source={require('../images/MajorArcana/Fool.jpg')} />
              </View>
              <Text style={[globalStyles.xButton, styles.xButton]} onPress={this.GoBack.bind(this)}>&times;</Text>
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
  xButton: {
    color: 'white'
  },
  info: {
    height: 22,
    position: 'absolute',
    right: -26,
    top: 3,
    width: 22
  },
  infobtn: {
    height: 22,
    width: 22
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
