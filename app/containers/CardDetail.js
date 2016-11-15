import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as deckActions from '../actions/deckActions';
import { connect } from 'react-redux';

import { StatusBar, View } from 'react-native';

import CardDetailView from '../components/CardDetailView';

class CardDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { state, actions } = this.props;
        return (
            <View>
                <StatusBar hidden={true}/>
                <CardDetailView
                  {...this.props} />
            </View>
        );
    }
}

export default connect(state => ({state: state.createDeck}), (dispatch) => ({
    actions: bindActionCreators(deckActions, dispatch)
}))(CardDetail);
