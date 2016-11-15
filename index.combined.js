import React, {Component} from 'react';
import {AsyncStorage, Navigator} from 'react-native';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist'

import * as reducers from './app/reducers';
import Menu from './app/containers/Menu.js';

const reducer = combineReducers(reducers);
const store = compose(autoRehydrate())(createStore)(reducer)
persistStore(store, {storage: AsyncStorage})

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
