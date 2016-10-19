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
        backgroundColor: '#D52B08'
    },
    green: {
        backgroundColor: '#737822'
    },
    blue: {
        backgroundColor: '#356D83'
    },
    purple: {
        backgroundColor: '#73436E'
    },
    yellow: {
        backgroundColor: '#B99A10'
    }
});
