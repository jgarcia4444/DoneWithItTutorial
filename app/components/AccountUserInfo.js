
import React from 'react';
import { View, Text } from 'react-native';

export default function AccountUserInfo() {
    const mockUser = {
        userAvatar: require('../assets/mosh.jpg'),
        userName: 'Mosh Hamedani',
        userEmail: 'programmingwithmosh@gmail.com'
    }

    return (
        <View>
            <Text>Hello World</Text>
        </View>
    )
}