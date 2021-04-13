import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Colors from '../config/colors';

export default function CardComponent({title, subtitle, image}) {

    const styles = StyleSheet.create({
        cardContainer: {
            width: '90%',
            height: 300,
            margin: '5%',
            backgroundColor: '#fff',
            borderRadius: 10
        },
        imageStyle: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: "100%",
            height: '72.5%',
        },
        titleStyle: {
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 5
        },
        subtitleStyle: {
            marginTop: 5,
            marginLeft: 20,
            color: Colors.secondary,
            fontWeight: '700',
        }
    })
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.imageStyle} />
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
    );
}