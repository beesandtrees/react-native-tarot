import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

import globalStyles from '../helpers/globalStyles.js';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styles: [
                globalStyles.buttonText
            ]
        }

        switch (this.props.color) {
            case 'green':
                this.state.styles.push(styles.green);
                break;
            case 'purple':
                this.state.styles.push(styles.purple);
                break;
            case 'blue':
                this.state.styles.push(styles.blue);
                break;
            case 'yellow':
                this.state.styles.push(styles.yellow);
                break;
            default:
                this.state.styles.push(styles.red);
                break;
        }

        if(this.props.smaller) {
            this.state.styles.push(globalStyles.buttonChoices)
        }

        if(this.props.note) {
            this.state.styles.push(globalStyles.buttonNote)
        }
    }
    render() {
        return (
            <TouchableHighlight style={[globalStyles.button]} onPress={this.props.press} underlayColor="transparent">
                <Text style={this.state.styles}>{this.props.buttonText}</Text>
            </TouchableHighlight>
        )

    }
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: '#57190C'
    },
    green: {
        backgroundColor: '#595C21'
    },
    blue: {
        backgroundColor: '#055575'
    },
    purple: {
        backgroundColor: '#23256B'
    },
    yellow: {
        backgroundColor: '#B38900'
    }
});
