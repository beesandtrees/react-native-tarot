import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
let wWidth = Dimensions.get('window').width;
let wHeight = Dimensions.get('window').height;

export default globalStyles = StyleSheet.create({
    fullView: {
       flex: 1,
       flexDirection: 'row',
       height: wHeight,
       padding: 0,
       width: wWidth
    },
    board: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: -1,
        marginRight: wWidth*0.025,
        padding: 20,
        paddingTop: 10,
        width: wWidth*0.6
    },
    choices: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: -1,
        height: wHeight,
        padding: 20,
        paddingTop: 10,
        width: wWidth*0.4
    },
    heading: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        marginBottom: 20
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
      marginTop: 10,
      paddingRight: 36,
      width: wWidth*0.99
    },
    label: {
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection:'row',
      paddingLeft: 30,
      width: wWidth*0.6
    },
    labelText: {
      marginLeft: 10,
      position: "relative",
      top: -2
    },
    check: {
      borderColor: 'white',
      borderRadius: 12,
      borderWidth: 1,
      height: 24,
      overflow: 'hidden',
      width: 24
    },
    info: {
      marginLeft: 20,
      height: 18,
      width: 18
    },
    infobtn: {
      height: 18,
      width: 18
    },
    buttons: {
      alignSelf: 'stretch',
    },
    buttonText: {
      alignSelf: 'stretch',
      borderColor: 'white',
      borderRadius: 8,
      borderWidth: 0,
      color: '#ffffff',
      flex: 1,
      fontSize: 16,
      marginBottom: 20,
      overflow: 'hidden',
      padding: 6,
      textAlign: 'center',
      width: (wWidth*0.6)*0.6
    },
    buttonChoices: {
      borderWidth: 1,
      marginTop: 10,
      width: (wWidth*0.4)*0.8
    },
    buttonNote: {
      marginTop: 10,
      width: (wWidth*0.4)*0.8
    },
    buttonIndent: {
      marginLeft: 24,
    },
    buttonSmall: {
      alignSelf: 'flex-end',
      fontSize: 16,
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
      height: 1,
      marginBottom: 20,
      width: 300
    },
    whiteText: {
      color: 'white'
    }
});
