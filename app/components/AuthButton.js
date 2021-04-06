import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Colors from '../config/colors';

export default function AuthButton({backgroundColor}) {

    const styles = StyleSheet.create({
        buttonContainerView: {
            alignSelf: 'center',
            width: '80%',
            height: 40,
            backgroundColor: backgroundColor === 'primary' ? Colors.primary : Colors.secondary,
            borderRadius: 20,
            marginBottom: 20
        }
    })

    return (
        <View style={styles.buttonContainerView}>
            <Button color='#fff' title={backgroundColor === 'primary' ? 'Login' : 'Signup'} />
        </View>
    )

}
