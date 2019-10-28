import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './components/login/LoginPage'
import MainPage from './components/home/HomePage'

const App = createStackNavigator({
    Login: {
        screen: LoginPage,
    },
    Main: {
        screen: MainPage,
    },
}, {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none'
});

export default createAppContainer(App);