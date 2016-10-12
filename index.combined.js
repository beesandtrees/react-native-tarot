import React, {Component} from 'react';
import {Navigator} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './app/reducers';
import Menu from './app/containers/Menu.js';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class MainView extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator initialRoute={{
                    name: 'Menu',
                    component: Menu
                }} configureScene={() => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }} renderScene={(route, navigator) => {
                    if (route.component) {
                        return React.createElement(route.component, {
                            ...this.props,
                            ...route.passProps,
                            navigator,
                            route
                        });
                    }
                }}/>
            </Provider>
        );
    }
}
