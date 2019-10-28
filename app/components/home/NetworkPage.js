import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

class NetworkPage extends Component {
    static navigationOptions = (navigation) => {
        return {
            title: "Network",
            tabBarLabel: "Network",
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/icons/network_active.png')}></Image>
                    );
                } else {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/icons/network.png')}></Image>
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
                <Text>Network Page</Text>
            </View>
        );
    }
}

export default NetworkPage;