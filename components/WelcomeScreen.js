import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import bgImage from '../assets/background.jpg';
import logo from '../assets/logo-red.png';

const WelcomeScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={{width: '100%', height: '100%'}}source={bgImage} >
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
                <Button title="hola" style={styles.topButton}/>
                <Button title="tierra" style={styles.bottomButton}/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 125,
        height: 125,
        alignSelf: 'center',
        marginTop: 100
    },
    logoText: {
        fontWeight: '700',
        color: '#777',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 20
    },
    topButton: {

    },
    bottomButton: {

    },
})

export default WelcomeScreen;