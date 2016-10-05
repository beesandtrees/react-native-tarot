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

export default class ChooseLayout extends Component {
    constructor(props) {
        super(props);
    }
    GoBack() {
      this.props.navigator.pop();
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
                    <View style={[globalStyles.checkbox]}>
                        <View style={[globalStyles.check]}></View>
                        <TouchableHighlight underlayColor="transparent"  style={[globalStyles.label]}>
                            <Text style={[globalStyles.whiteText, globalStyles.labelText]}>Celtic Cross</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={[globalStyles.checkbox]}>
                        <View style={[globalStyles.check]}></View>
                        <TouchableHighlight underlayColor="transparent"  style={[globalStyles.label]}>
                            <Text style={[globalStyles.whiteText, globalStyles.labelText]}>Past, Present, Future</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={[globalStyles.checkbox]}>
                        <View style={[globalStyles.check]}></View>
                        <TouchableHighlight underlayColor="transparent"  style={[globalStyles.label]}>
                            <Text style={[globalStyles.whiteText, globalStyles.labelText]}>Single Card</Text>
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
                  <Image style={styles.card} source={require('../images/layouts/Celtic-Cross.png')} />
              </View>
              <Text style={[globalStyles.xButton, styles.xButton]} onPress={this.GoBack.bind(this)}>&times;</Text>
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
  scrollView: {
    height: wHeight*0.3,
    width: 300
  }
});
