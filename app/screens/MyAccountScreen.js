
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AccountUserInfo from '../components/AccountUserInfo';

export default function MyAccountScreen() {


    const styles = StyleSheet.create({
        containerStyle: {
            backgroundColor: Colors.whiteSmoke,
            flex: 1,
            width: '100%'
        }
    })

    return (
        <SafeAreaView style={styles.containerStyle}>
            <AccountUserInfo />
        </SafeAreaView>
    )

    

}