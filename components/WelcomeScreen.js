import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import bgImage from '../assets/background.jpg';

const WelcomeScreen = () => {

    return (
        <View style={styles.container}>
            <Image style={styles.bgImage} source={bgImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    bgImage: {
        width: '100%',
        height: '100%'
    }
})

export default WelcomeScreen;