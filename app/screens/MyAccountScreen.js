
import React from 'react';
import {View, SafeAreaView, StyleSheet } from 'react-native';
import Colors from '../config/colors';
import AccountUserInfo from '../components/AccountUserInfo';
import AccountOption from '../components/AccountOption';

export default function MyAccountScreen() {


    

    return (
        <SafeAreaView style={styles.containerStyle}>
            <AccountUserInfo />
            <View style={styles.listingMessagesContainer}>
                <AccountOption title={"My Listings"} />
                <AccountOption title={"My Messages"} />
            </View>
            <View style={styles.logoutContainer}>
                <AccountOption title={"Log Out"}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.gray,
        flex: 1,
        width: '100%',
    },
    listingMessagesContainer: {
        marginTop: 40
    },
    logoutContainer: {
        marginTop: 20
    },
})