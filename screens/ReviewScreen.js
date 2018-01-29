import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation, screenProps } from 'react-navigation';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: 'Review Jobs',
        headerRight: <Button title="Settings" onPress={() => navigation.navigate('settings')} />
    })
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
