import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Button } from 'react-native';
import bgImage from '../assets/background.jpg';
import logo from '../assets/logo-red.png';
import colors from '../config/colors';

const WelcomeScreen = ({goToImageView}) => {

    return (
        <View style={styles.container}>
            <ImageBackground style={{width: '100%', height: '100%'}}source={bgImage} >
                <Image source={logo} style={styles.logo} />
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
                <View style={styles.topButton}>
                    <Button style={styles.navButton} title="go to image view" onPress={goToImageView} />
                </View>
                <View style={styles.bottomButton}>
                    <Button style={styles.navButton} title="" />
                </View>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
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
        position: 'absolute',
        top: '84%',
        height: '8%',
        width: '100%',
        backgroundColor: colors.primary
    },
    bottomButton: {
        position: 'absolute',
        top: '92%',
        height: '8%',
        width: '100%',
        backgroundColor: colors.secondary
    },
    navButton: {
        height: '100%',
        width: '100%'
    },
})

export default WelcomeScreen;