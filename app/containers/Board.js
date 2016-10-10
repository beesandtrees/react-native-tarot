import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as deckActions from '../actions/deckActions';
import { connect } from 'react-redux';

import { StatusBar, View } from 'react-native';

import BoardDisplay from '../components/BoardDisplay';

class Board extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { state, actions } = this.props;
        return (
            <View>
                <StatusBar hidden={true}/>
                <BoardDisplay navigator={this.props.navigator}
                  {...actions} {...state} />
            </View>
        );
    }
}

export default connect(state => ({state: state.createDeck}), (dispatch) => ({
    actions: bindActionCreators(deckActions, dispatch)
}))(Board);
