import React, { Component } from 'react';

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

import Images from '../helpers/images.js';
import globalStyles from '../helpers/globalStyles.js';

import CardNote from './Note';

import CardImage from '../subcomponents/CardImage';
import CloseButton from '../subcomponents/CloseButton';

export default class CardDetail extends Component {
  constructor(props) {
    super(props);

    let name = this.props.value.name.replace(/ /g, "+");

    this.state = {
        description: this.props.reversed === true ? this.props.value.reversed : this.props.value.upright,
        secondaryDescription: this.props.reversed === false ? this.props.value.reversed : this.props.value.upright,
        upright: this.props.reversed === true ? 'Reversed' : 'Upright',
        secondaryDirection: this.props.reversed === false ? 'Reversed' : 'Upright',
        name: name,
        mynote: ''
    };
  }
  componentDidMount() {
      AsyncStorage.getItem(this.state.name).then((value) => {
          this.setState({"mynote": value});
      }).done();
  }
  LoadNotes() {
      this.props.navigator.push({
        component: CardNote,
        passProps: {
          value: this.props.value
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
                    <CardImage deck={this.props.deck} reversed={this.props.reversed} value={this.props.value} size='large' />
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
                        <Text style={styles.descColor}>{this.state.mynote}</Text>
                    </ScrollView>
                </View>
                <TouchableHighlight style={[globalStyles.button]} onPress={this.LoadNotes.bind(this)} underlayColor="transparent">
                    <Text style={[globalStyles.buttonText, styles.choices, globalStyles.buttonSmall]}>Add a Note</Text>
                </TouchableHighlight>
            </View>
            <CloseButton GoBack={() => this.GoBack()} />
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
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 10
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
