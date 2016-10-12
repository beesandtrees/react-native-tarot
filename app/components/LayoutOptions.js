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

import Button from '../subcomponents/Button';
import CloseButton from '../subcomponents/CloseButton';
import Checkbox from '../subcomponents/Checkbox';

class LayoutView extends Component {
  render() {
      switch (this.props.layout) {
        case 'Single' :
          return (
            <View style={[globalStyles.choices, styles.choices]}>
                <Image style={styles.cardSingle} source={require('../images/layouts/Single.png')} />
            </View>
          )
        case 'Celtic-Cross' :
          return (
            <View style={[globalStyles.choices, styles.choices]}>
              <Image style={styles.card} source={require('../images/layouts/Celtic-Cross.png')} />
            </View>
          )
        case 'Past-Present-Future' :
          return (
            <View style={[globalStyles.choices, styles.choices]}>
              <Image style={styles.cardPPF} source={require('../images/layouts/PPF.png')} />
            </View>
          )
        default:
          return (
            <View style={[globalStyles.choices, styles.choices]}>
              <Image style={styles.cardHorizontal} source={require('../images/layouts/Basic.png')} />
            </View>
          )
      }
  }
}

export default class LayoutOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
          defaultSet : false
        }
    }
    GoBack() {
      this.props.navigator.pop();
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
                <Text style={[globalStyles.heading, styles.heading]}>Choose a Layout</Text>
                <ScrollView
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  showsVerticalScrollIndicator={true}
                  style={styles.scrollView}>

                    <Checkbox MainAction={this.props.chooseLayout.bind(null, 'Basic')} labelText="Basic" checked={this.props.layout === 'Basic'} color="blue" />

                    <Checkbox MainAction={this.props.chooseLayout.bind(null, 'Celtic-Cross')} labelText="Celtic Cross" checked={this.props.layout === 'Celtic-Cross'} color="blue" />

                    <Checkbox MainAction={this.props.chooseLayout.bind(null, 'Past-Present-Future')} labelText="Past Present Future" checked={this.props.layout === 'Past-Present-Future'} color="blue" />

                    <Checkbox MainAction={this.props.chooseLayout.bind(null, 'Single')} labelText="Single Card" checked={this.props.layout === 'Single'} color="blue" />
                </ScrollView>
                <View style={[globalStyles.hr]}></View>
                <Checkbox MainAction={() => this.SetAsDefault('Basic')} labelText="Set as Default" checked={this.state.defaultSet} color="blue" />
                <Button press={() => this.GoBack()} buttonText="Save Selection" color="blue" />
              </View>
              <LayoutView layout={this.props.layout} />
              <CloseButton GoBack={() => this.GoBack()} white={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  board: {
      backgroundColor: '#64A8C4',
  },
  choices: {
    backgroundColor: '#356D83',
  },
  heading: {
      marginBottom: 24
  },
  xButton: {
    color: 'white'
  },
  card: {
    height: wHeight*0.7,
    marginTop: wHeight*0.15,
    width: (wWidth*0.4)*0.7
  },
  cardHorizontal: {
    height: (wWidth*0.4)*0.6,
    marginTop: wHeight*0.2,
    width: (wWidth*0.4)*0.8
  },
  cardPPF: {
    height: wHeight*0.25,
    marginLeft: 10,
    marginTop: wHeight*0.25,
    width: (wWidth*0.4)*0.75
  },
  cardSingle: {
    height: wHeight*0.7,
    marginLeft: ((wWidth*0.4)*0.5)*0.275,
    marginTop: wHeight*0.15,
    width: (wWidth*0.4)*0.5
  },
  scrollView: {
    height: wHeight*0.3,
    width: 300
  }
});
