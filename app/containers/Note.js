import React, { Component } from 'react';

import {
    AsyncStorage,
    Image,
    Navigator,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

import Images from '../helpers/images.js';
import globalStyles from '../helpers/globalStyles.js';

import CardImage from '../subcomponents/CardImage';
import CloseButton from '../subcomponents/CloseButton';

export default class CardNote extends Component {
  constructor(props) {
    super(props);

    let cardSearch = this.props.value.arcana === 'Major' ? "major" + this.props.value.image : this.props.value.suit + this.props.value.id;
    let name = this.props.value.name.replace(/ /g, "+");

    this.state = {
        image : this.props.value.arcana === 'Minor' ? Images[0][cardSearch] :
        Images[0][cardSearch],
        cardStyles : [styles.image],
        description: this.props.reversed === true ? this.props.value.reversed : this.props.value.upright,
        name: name,
        secondaryDescription: this.props.reversed === false ? this.props.value.reversed : this.props.value.upright,
        upright: this.props.reversed === true ? 'Reversed' : 'Upright',
        secondaryDirection: this.props.reversed === false ? 'Reversed' : 'Upright',
        text: ''
      };
  }
  componentDidMount() {
      AsyncStorage.getItem(this.state.name).then((value) => {
          this.setState({"text": value});
      }).done();
  }
  SaveText(value) {
      AsyncStorage.setItem(this.state.name, value);
      this.setState({"text": value});
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
                    <CardImage deck={this.props.deck} reversed={false} value={this.props.value} size='large' />
                </View>
            </View>
            <View style={[globalStyles.board, styles.board]}>
                <View>
                    <Text style={styles.subHeading}>{this.props.value.name}</Text>
                </View>
                <View style={styles.description}>
                    <Text style={[globalStyles.heading, styles.heading]}>Include your notes below</Text>
                    <View style={[globalStyles.hr, styles.hr]}></View>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Add your note here..."
                      multiline={true}
                      numberOfLines={6}
                      onChangeText={(text) => this.SaveText(text)}
                      value={this.state.text}
                    />
                </View>
                <TouchableHighlight onPress={() => this.GoBack()} style={[globalStyles.button]} underlayColor="transparent">
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
      backgroundColor: '#FFEB92',
    },
    choices: {
      backgroundColor: '#B99A10',
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
      borderColor: '#B99A10',
      borderWidth: 3,
      height: wHeight*0.625,
      padding: 20
    },
    descriptionText: {
      fontWeight: '300'
    },
    textInput: {
      height: 120,
      fontSize:18
    }
});
