import React, { Component } from 'react';
import {
    View,
    Alert,
} from 'react-native';

import LoginForm from './LoginForm'
import Footer from './Footer'

import { LOG_IN } from '../../app_config'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { login: false }
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
        let data = {
            username: account,
            password: password
        };
        let nav = this.props.navigation;
        console.log(JSON.stringify(data));
        fetch(LOG_IN, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'text/html;charset=UTF-8'
            })
        }).then(function (response) {
            console.log(response);
            nav.navigate('Main');
        }).catch(function (error) {
            console.log("catch error");
            console.log(error);
            nav.navigate('Main');
        })
    }
}

export default LoginPage;