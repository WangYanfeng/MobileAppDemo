import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

class SetupPage extends Component {
    static navigationOptions = (navigation) => {
        return {
            title: "Setup",
            tabBarLabel: "Setup",
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/icons/setting_active.png')}></Image>
                    );
                } else {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/icons/setting.png')}></Image>
                    );
                }
            },
        }
    }

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" backgroundColor="rgba(130, 10, 10, 1)" />
                <Text>Setup Page</Text>
            </View>
        );
    }
}

export default SetupPage;