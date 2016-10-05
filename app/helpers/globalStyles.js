import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

export default globalStyles = StyleSheet.create({
    fullView: {
       backgroundColor: '#EB6B51',
       flex: 1,
       flexDirection: 'row',
       height: wHeight,
       padding: 0,
       width: wWidth
    },
    board: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        flex: -1,
        marginRight: wWidth*0.025,
        padding: 20,
        width: wWidth*0.6
    },
    choices: {
        alignSelf: 'flex-end',
        flex: -1,
        height: wHeight,
        padding: 20,
        width: wWidth*0.4
    },
    heading: {
        color: 'white',
        fontSize: 36,
        fontWeight: '300',
        marginBottom: 16
    },
    subHeading: {
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 4
    },
    choiceText: {
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 12,
        marginLeft: 12
    },
    checkbox: {
      height: 44,
      marginBottom: 10,
      paddingRight: 36,
      position: 'relative',
      width: wWidth*0.5
    },
    check: {
      borderColor: 'white',
      borderRadius: 8,
      borderWidth: 2,
      height: 24,
      position: 'absolute',
      top: 3,
      left: -34,
      width: 24
    },
    label: {
      position: 'absolute',
      top: -2,
      left: 64
    },
    labelText: {
      fontSize: 24,
    },
    info: {
      height: 22,
      position: 'absolute',
      right: 36,
      top: 3,
      width: 22,
      zIndex: 99
    },
    infobtn: {
      height: 22,
      width: 22
    },
    buttons: {
        alignSelf: 'stretch',
    },
    backgroundRed: {
        backgroundColor: '#D52B08',
    },
    button3: {
        backgroundColor: '#737822',
    },
    buttonText: {
        alignSelf: 'stretch',
        borderColor: 'white',
        borderRadius: 8,
        borderWidth: 2,
        color: '#ffffff',
        flex: 1,
        fontSize: 24,
        marginBottom: 20,
        overflow: 'hidden',
        padding: 6,
        textAlign: 'center',
        width: (wWidth*0.6)*0.6
    },
    buttonChoices: {
      marginTop: 10,
      width: (wWidth*0.4)*0.8
    },
    buttonIndent: {
      marginLeft: 30,
    },
    buttonSmall: {
      alignSelf: 'flex-end',
      fontSize: 20,
      marginTop: 16,
      padding: 6,
      width: (wWidth*0.6)*0.5
    },
    xButton: {
      backgroundColor: 'transparent',
      color: '#4D4A4F',
      fontSize: 48,
      height: 48,
      position: 'absolute',
      top: 0,
      right: 0,
      width: 40,
      zIndex: 99
    },
    hr: {
      backgroundColor: 'white',
      height: 2,
      marginBottom: 20,
      width: 300
    },
    whiteText: {
      color: 'white'
    }
});
