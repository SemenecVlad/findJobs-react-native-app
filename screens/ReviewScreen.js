import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation, screenProps } from 'react-navigation';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation, screenProps}) => ({
        headerTitle: 'Review Jobs',
        headerRight: <Text>Go Right</Text>
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
