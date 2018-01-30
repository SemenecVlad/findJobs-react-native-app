import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

class SettingsScreen extends Component {

    static navigationOptions = () => {
        return {
            title: "Settings",
            headerStyle: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    }
    render() {
        return (
            <View>
                <Text>SettingsScreen</Text>
                <Text>SettingsScreen</Text>
                <Text>SettingsScreen</Text>
                <Text>SettingsScreen</Text>
                <Text>SettingsScreen</Text>
            </View>
        );
    }
}

export default SettingsScreen;
