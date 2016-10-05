import React, { Component } from 'react';

import {
    Animated,
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

import Images from '../helpers/images.js';
import globalStyles from '../helpers/globalStyles.js';

import CardNote from './Note';

export default class CardDetail extends Component {
  constructor(props) {
    super(props);

    let cardSearch = this.props.value.arcana === 'Major' ? "major" + this.props.value.image : this.props.value.suit + this.props.value.id;

    this.state = {
        image : this.props.value.arcana === 'Minor' ? Images[0][cardSearch] :
        Images[0][cardSearch],
        cardStyles : [styles.image],
        description: this.props.reversed === true ? this.props.value.reversed : this.props.value.upright,
        secondaryDescription: this.props.reversed === false ? this.props.value.reversed : this.props.value.upright,
        upright: this.props.reversed === true ? 'Reversed' : 'Upright',
        secondaryDirection: this.props.reversed === false ? 'Reversed' : 'Upright',
        modalVisible: true
    };
  }
  LoadNotes() {
      this.props.navigator.push({
        component: CardNote,
        passProps: {
          value: this.props.value,
          reversed : this.props.reversed,
          position: this.props.position
        }
      });
  }
  GoBack() {
    this.props.navigator.pop();
  }
  render() {
     return (
        <View style={[globalStyles.fullView, styles.board]}>
            <StatusBar hidden={true} />
            <View style={[globalStyles.choices, styles.choices]}>
                <View style={styles.imageHolder}>
                    <Image style={styles.card} source={this.state.image} />
                </View>
            </View>
            <View style={[globalStyles.board, styles.board]}>
                <View>
                    <Text style={styles.subHeading}>{this.props.position}</Text>
                </View>
                <View style={styles.description}>
                    <Text style={[globalStyles.heading, styles.heading]}>{this.props.value.name}</Text>
                    <View style={[globalStyles.hr, styles.hr]}></View>
                    <ScrollView
                      automaticallyAdjustContentInsets={false}
                      scrollEventThrottle={200}
                      showsVerticalScrollIndicator={true}
                      style={styles.scrollView}>
                        <Text style={[styles.subHeading, styles.descriptionText]}>{this.state.description}</Text>
                        <Text style={styles.descColor}>{this.state.secondaryDirection}:</Text>
                        <Text style={[styles.descColor, styles.descMargin]}>{this.state.secondaryDescription}</Text>
                        <Text style={styles.descColor}>My Notes:</Text>
                    </ScrollView>
                </View>
                <TouchableHighlight style={[globalStyles.button]} onPress={this.LoadNotes.bind(this)} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, styles.choices, globalStyles.buttonSmall]}>Add a Note</Text>
                </TouchableHighlight>
            </View>
            <Text style={[globalStyles.xButton]} onPress={this.GoBack.bind(this)}>&times;</Text>
        </View>
     );
  }
}

const styles = StyleSheet.create({
    board: {
      backgroundColor: '#D3D87F',
    },
    choices: {
      backgroundColor: '#737822',
      alignItems: 'center'
    },
    hr: {
      backgroundColor: '#4D4A4F',
    },
    heading: {
      color: '#4D4A4F',
      fontSize: 24
    },
    subHeading: {
      color: '#4D4A4F',
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 10
    },
    card: {
      borderRadius: 6,
      height: ((wHeight/360)-0.15)*360,
      margin: 3,
      width: (((wWidth*0.27)/210))*210
    },
    imageHolder: {
      backgroundColor: 'white',
      borderRadius: 6,
      height: ((wHeight/366)-0.13)*366,
      width: (((wWidth*0.28)/216))*216
    },
    imageReverse: {
      transform: [{ rotate: '180deg'}]
    },
    scrollView: {
      height: wHeight*0.3,
      width: 300
    },
    description: {
      backgroundColor: 'white',
      borderColor: '#737822',
      borderWidth: 3,
      height: wHeight*0.625,
      padding: 20
    },
    descColor: {
      color: '#4D4A4F',
    },
    descMargin: {
      marginBottom: 10
    },
    descriptionText: {
      fontWeight: '300',
      marginBottom: 20
    }
});
