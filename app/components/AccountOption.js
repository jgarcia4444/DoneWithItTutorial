import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

export default function AccountOption({title}) {

    

    return(
        <View style={styles.containerStyle}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
    },
})