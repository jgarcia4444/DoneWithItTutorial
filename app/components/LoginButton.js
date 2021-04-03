import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Colors from '../config/colors';

export default function LoginButton() {
    return (
        <View style={styles.buttonContainerView}>
            <Button color='#fff' title="Login" />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainerView: {
        width: '100%',
        height: 40,
        backgroundColor: Colors.primary,
        borderRadius: 20
    }
})