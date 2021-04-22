import React from 'react';
import {StatusBar, View, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import chairImg from '../assets/chair.jpg';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ImageView = ({back}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <TouchableOpacity style={styles.topLeftButton}>
                <MaterialCommunityIcons name="close" size={40} color="white"/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.topRightButton}>
                <MaterialCommunityIcons name="trash-can-outline" size={40} color="white" />
            </TouchableOpacity>
            <Image source={chairImg} style={styles.chairImg} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
    },
    topLeftButton: {
        width: 50,
        height: 50,
        // backgroundColor: colors.primary,
        position: 'absolute',
        top: getStatusBarHeight(),
        left: 30
    },
    topRightButton: {
        width: 50,
        height: 50,
        // backgroundColor: colors.secondary,
        position: 'absolute',
        top: getStatusBarHeight(),
        right: 30
    },
    chairImg: {
        height: '66%',
        width: '100%',
        position: 'absolute',
        top: '16.5%',
        left: 0
    }
})

export default ImageView