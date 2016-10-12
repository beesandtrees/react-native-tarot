import React, { Component } from 'react';

import {
    AsyncStorage,
    Image,
    Navigator,
    ScrollView,
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

import Button from '../subcomponents/Button';
import CardImage from '../subcomponents/CardImage';
import CloseButton from '../subcomponents/CloseButton';

class ToggleButton extends Component {
  render() {
    if(this.props.view === "detail") {
      return (
        <Button press={this.props.detailAction} buttonText="Add a Note" smaller={true} color="yellow" />
      )
    } else {
      return (
        <Button press={this.props.noteAction} buttonText="Save Note" smaller={true} color="yellow" />
      )
    }
  }
}

class DescriptionNote extends Component {
  render() {
      if(this.props.view === "detail") {
        return (
          <ScrollView
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            showsVerticalScrollIndicator={true}
            style={styles.scrollView}>
              <Text style={[styles.subHeading, styles.descriptionText]}>{this.props.description}</Text>
              <Text style={styles.descColor}>{this.props.secondaryDirection}:</Text>
              <Text style={[styles.descColor, styles.descMargin]}>{this.props.secondaryDescription}</Text>
              <Text style={styles.descColor}>My Notes:</Text>
              <Text style={styles.descColor}>{this.props.mynote}</Text>
          </ScrollView>
        )
      } else {
        return (
          <TextInput
            style={styles.textInput}
            placeholder="Add your note here..."
            multiline={true}
            numberOfLines={6}
            onChangeText={this.props.saveText}
            value={this.props.mynote}
          />
        )
      }
    }
}

export default class CardDetail extends Component {
  constructor(props) {
    super(props);

    let name = this.props.value.name.replace(/ /g, "+");

    this.state = {
        heading: this.props.value.name,
        subHeading: this.props.position,
        view: "detail",
        description: this.props.reversed === true ? this.props.value.reversed : this.props.value.upright,
        secondaryDescription: this.props.reversed === false ? this.props.value.reversed : this.props.value.upright,
        upright: this.props.reversed === true ? 'Reversed' : 'Upright',
        secondaryDirection: this.props.reversed === false ? 'Reversed' : 'Upright',
        name: name,
        mynote: '',
        viewStyle: [globalStyles.fullView, styles.board],
        boardStyle: [globalStyles.board, styles.board],
        choiceStyle: [globalStyles.choices, styles.choices],
        noteStyle: [globalStyles.fullView, styles.noteBoard],
        noteBoard: [globalStyles.board, styles.noteBoard],
        choiceNote: [globalStyles.choices, styles.noteChoices]
    };

  }
  componentDidMount() {
      AsyncStorage.getItem(this.state.name).then((value) => {
          this.setState({"mynote": value});
      }).done();
  }
  LoadNotes(name) {
      this.setState({"view": "Notes"});
      this.setState({"heading": name});
      this.setState({"subHeading": "Include your notes below"});
  }
  SaveNotes(position) {
    this.setState({"view": "detail"});
    this.setState({"subHeading": position});
  }
  GoBack() {
    this.props.navigator.pop();
  }
  SaveText(value) {
      AsyncStorage.setItem(this.state.name, value);
      this.setState({"mynote": value});
  }
  render() {
     return (
        <View style={this.state.noteStyle}>
            <StatusBar hidden={true} />
            <View style={this.state.choiceNote}>
                <View style={styles.imageHolder}>
                    <CardImage deck={this.props.deck} reversed={this.props.reversed} value={this.props.value} size='large' />
                </View>
            </View>
            <View style={this.state.noteBoard}>
                <View>
                    {/*  switch to state based var */}
                    <Text style={styles.subHeading}>{this.state.subHeading}</Text>
                </View>
                <View style={styles.description}>
                    <Text style={[globalStyles.heading, styles.heading]}>{this.state.heading}</Text>
                    <View style={[globalStyles.hr, styles.hr]}></View>
                    <DescriptionNote {...this.state} saveText={(text) => this.SaveText(text)} />
                </View>
                <ToggleButton view={this.state.view} detailAction={() => this.LoadNotes(this.props.value.name)} noteAction={() => this.SaveNotes(this.props.position)} />
            </View>
            <CloseButton GoBack={() => this.GoBack()} />
        </View>
     );
  }
}

const styles = StyleSheet.create({
    noteBoard: {
      backgroundColor: '#FFEB92',
    },
    noteChoices: {
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
      borderColor: '#B99A10',
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
    },
    textInput: {
      height: 120,
      fontSize:18
    }
});
