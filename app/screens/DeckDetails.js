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
import Images from '../helpers/images.js';
import Cards from '../helpers/cards.json';

import Card from '../components/Card';
import CloseButton from '../components/CloseButton';

export default class DeckDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.renderImages()
        };
    }
    GoBack() {
      this.props.navigator.pop();
    }
    renderImages() {
      var images = [];
      for (var i = 0; i < Cards.length; i++) {
        let card = Cards[i];
        images.push(
            <Card key={i} index={i} value={card} reversed={false} position={false} navigator={this.props.navigator} />
        );
      }
      return images;
    }
    render() {
        return (
            <View style={[globalStyles.fullView, styles.board]}>
              <StatusBar hidden={true} />
              <View style={[globalStyles.board, styles.board]}>
                <ScrollView
                  contentContainerStyle={styles.list}
                  automaticallyAdjustContentInsets={false}
                  scrollEventThrottle={200}
                  showsVerticalScrollIndicator={true}
                  style={styles.scrollView}>
                      {this.state.images}
                </ScrollView>
              </View>
              <View style={[globalStyles.choices, styles.choices]}>
                  <Text style={[globalStyles.subHeading, globalStyles.whiteText, styles.heading]}>Rider-Waite Deck</Text>
                  <Text style={globalStyles.whiteText}>
                    Illustrated by Patricia Coleman Smith in 1910, the Rider-Waite deck is incredibly popular.
                  </Text>
              </View>
              <CloseButton GoBack={() => this.GoBack()} white={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  board: {
      backgroundColor: '#FFFFFF',
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
    right: -30,
    top: 3,
    width: 22
  },
  card: {
    height: wHeight*0.9,
    width: (wWidth*0.4)*0.7
  },
  scrollView: {
    height: wHeight*0.3,
    width: 300
  },
  image: {
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    width: 35,
    height: 60
  },
  scrollView: {
    height: wHeight*0.9,
    width: wWidth*0.55
  },
  list: {
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
});
