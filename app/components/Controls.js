import React, {Component} from 'react';

import {AppRegistry, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

export default class Controls extends Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}>New Reading</Text>
                <TouchableHighlight style={[styles.buttons]} onPress={() => this.props.shuffleCards(10, 0.05)}>
                    <Text style={styles.buttonText}>Careful Shuffle</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttons, styles.button2]} onPress={() => this.props.shuffleCards(10, 0.4)}>
                    <Text style={styles.buttonText}>Fully Random</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttons, styles.button3]} onPress={() => this.props.shuffleCards(3, 0)}>
                    <Text style={styles.buttonText}>Past, Present, Future</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18
    }
});
