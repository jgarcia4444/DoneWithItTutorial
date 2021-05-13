
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors  from '../config/colors';

export default function AccountUserInfo() {
    const mockUser = {
        userAvatar: require('../assets/mosh.jpg'),
        userName: 'Mosh Hamedani',
        userEmail: 'programmingwithmosh@gmail.com'
    }

    return (
        <View style={styles.containerStyle}>
            <Image source={mockUser.userAvatar} style={styles.avatarStyle} />
            <View style={styles.userInfoContainer}>
                <Text style={styles.nameStyle}>{mockUser.userName}</Text>
                <Text style={styles.emailStyle}>{mockUser.userEmail}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatarStyle: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    containerStyle: {
        backgroundColor: Colors.white,
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        marginTop: 20,
    },
    emailStyle: {
        color: Colors.darkGray,
    },
    nameStyle: {
        fontWeight: '900',
        paddingBottom: 5
    },
    userInfoContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 15,
    }
})