import React, { Component } from 'react';
import {
    View,
    Alert,
} from 'react-native';

import LoginForm from './LoginForm'
import Footer from './Footer'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.onPressLogin = this.onPressLogin.bind(this);
    }
    render() {
        return (
            <View>
                <LoginForm onPressLogin={this.onPressLogin}></LoginForm>
                <Footer />
            </View>
        );
    }

    onPressLogin(account, password) {
        Alert.alert(account + " - - " + password);
        this.props.navigation.navigate('Main');
    }
}

export default LoginPage;