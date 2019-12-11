import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function Footer(props) {
    return (
        <View style={styles.footer}>
            <View>
                <Text style={{ color: '#aaa', fontSize: 10 }}>Trendmicro@2019</Text>
            </View>
            <View>
                <Text style={{ color: '#aaa', fontSize: 10 }}>Powered by React-Native</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 60,
        width: width,
        // backgroundColor: 'rgba(130, 10, 10, 0.8)',
        marginTop: height - 80,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Footer;