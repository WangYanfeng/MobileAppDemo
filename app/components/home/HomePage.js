import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import SetupPage from './SetupPage';
import NetworkPage from './NetworkPage';
import AdminPage from './AdminPage';


class HomePage extends Component {
    static navigationOptions = (navigation) => {
        return {
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, tintColor }) => {
                if (focused) {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/icons/home_active.png')}></Image>
                    );
                } else {
                    return (
                        <Image style={{ width: 20, height: 20 }} source={require('../../images/icons/home.png')}></Image>
                    );
                }
            },
        }
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" backgroundColor="rgba(130, 10, 10, 1)" />
                <Text>Home Page</Text>
            </View>
        );
    }
}

const MainPage = createMaterialBottomTabNavigator({
    Home: {
        screen: HomePage,
    },
    Setup: {
        screen: SetupPage,
    },
    Network: {
        screen: NetworkPage,
    },
    Admin: {
        screen: AdminPage,
    },
}, {
    initialRouteName: 'Home',
    activeColor: 'rgb(130, 10, 10)', //选中tab文本颜色
    inactiveColor: '#000',
    showIcon: true, // 是否显示tab bar图标
    showLable: true, // 是否显示tab bar文本
    barStyle: { backgroundColor: '#fff' },
});

export default createAppContainer(MainPage);