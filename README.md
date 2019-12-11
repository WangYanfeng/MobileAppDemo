# React Native
ReactNative实现跨平台移动APP开发。此project只是个简单demo。

## 简介
### React React-Native
1. AppRegistry ReactNative应用入口。registerComponent注册根组件
2. TouchableOpacity, TouchableHighlight 可触控组件
### react-navigation

### Redux

## How to run
`react-native start`<br/>
`react-native run-android`<br/>

## Requirement
`Android Studio` [环境搭建](https://reactnative.cn/docs/getting-started/)<br/>
`npm install -g yarn react-native-cli`<br/>
`react-native init MyApp`<br/>
`yarn add react-navigation react-native-gesture-handler react-navigation-stack`<br/>
`yarn add react-navigation-material-bottom-tabs react-native-paper`<br/>
`yarn add react-native-elements react-native-vector-icons`<br/>
`yarn add react-dom react-native-web`<br/>

## 难点记录
1. *error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)/: Unterminated character class SyntaxError: Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class*

    1) node 使用v12.10.0
    2) 修改 \node_modules\metro-config\src\defaults\blacklist.js [详细](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start)

## Demo演示
![image](https://github.com/WangYanfeng/MobileAppDemo/blob/master/demo_images/Login.png)
![image](https://github.com/WangYanfeng/MobileAppDemo/blob/master/demo_images/HomePage.png)
