import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ListingDetailsScreen({image, userImage, title, subtitle, userListingsAmount}) {
    const styles = StyleSheet.create({
        mainContainerStyle: {
            flex: 1,
            backgroundColor: '#000',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

    return (
        <View style={styles.mainContainerStyle}>
            <Text style={{color: '#fff', fontSize: 40}}>Hello World</Text>
        </View>
    )

}