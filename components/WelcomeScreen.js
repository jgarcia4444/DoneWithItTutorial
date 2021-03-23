import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import bgImage from '../assets/background.jpg';
import logo from '../assets/logo-red.png';

const WelcomeScreen = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.bgImage} source={bgImage} />
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    logo: {
        width: 150,
        height: 150,
        top: 75,
        position: 'absolute'
    },
    logoText: {
        position: 'absolute',
        top: 240,
        fontWeight: '700',
        color: '#777'
    }
})

export default WelcomeScreen;