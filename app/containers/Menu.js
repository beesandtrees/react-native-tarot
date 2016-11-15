import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as deckActions from '../actions/deckActions';
import { connect } from 'react-redux';

import { StatusBar, View } from 'react-native';

import MenuItems from '../components/MenuItems';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { state, actions } = this.props;
        return (
            <View>
                <StatusBar hidden={true}/>
                <MenuItems navigator={this.props.navigator}
                  {...actions} {...state} />
            </View>
        );
    }
}

export default connect(state => ({state: state.createDeck}), (dispatch) => ({
    actions: bindActionCreators(deckActions, dispatch)
}))(Menu);
