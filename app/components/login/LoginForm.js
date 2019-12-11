import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    StatusBar,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function LoginHeader(props) {
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image style={styles.back} source={require('../../images/login_bg.png')} />
            <TouchableOpacity activeOpacity={1.0} onPress={props.blurTextInput} style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="rgba(130, 10, 10, 1)" />
                <Image source={require('../../images/trend_logo.png')} style={styles.iconStyle}></Image>
                {props.children}
            </TouchableOpacity>
        </View>
    );
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.blurTextInput = this.blurTextInput.bind(this);
        this.clickLogin = this.clickLogin.bind(this);
        this.state = { account: "", password: "" }
    }

    render() {
        return (
            <LoginHeader blurTextInput={this.blurTextInput}>
                <TextInput
                    ref='account'
                    value={this.state.account}
                    placeholder={'Account'}
                    keyboardType='email-address'
                    style={styles.textInputStyle}
                    onChangeText={(text) => this.setState({ account: text })}
                />
                <TextInput
                    ref='password'
                    placeholder={'Password'}
                    secureTextEntry={true}
                    value={this.state.password}
                    style={styles.textInputStyle}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableHighlight
                    underlayColor="rgba(130, 10, 10, 0.8)"
                    style={styles.loginBtn}
                    onPress={this.clickLogin}
                >
                    <Text style={{ color: 'white' }}>Log In</Text>
                </TouchableHighlight>
            </LoginHeader>
        );
    };

    blurTextInput() {
        this.refs.account.blur();
        this.refs.password.blur();
    };
    clickLogin() {
        this.refs.account.blur();
        this.refs.password.blur();
        if (this.state.account === null || this.state.account === "" || this.state.password === null || this.state.password === "") {
            Alert.alert("Please input username/password !");
            return;
        } else {
            this.props.onPressLogin(this.state.account, this.state.password);
        }
    };
}

const styles = StyleSheet.create({
    back: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: height,
        position: 'absolute',
    },
    container: {
        flex: 1,
        height: height,
        alignItems: "center",
        position: 'absolute',
    },
    iconStyle: {
        marginTop: 100,
        marginBottom: 30,
    },
    textInputStyle: {
        backgroundColor: "rgb(241, 240, 240)",
        width: width,
        height: 40,
        marginBottom: 3,
        textAlign: "center",
        paddingLeft: 15,
    },
    loginBtn: {
        backgroundColor: "rgb(218, 52, 52)",
        width: width * 0.7,
        height: 40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
});


export default LoginForm;