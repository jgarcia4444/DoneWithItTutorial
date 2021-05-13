import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../config/colors';

export default function AccountOption({title}) {

    const getIcon = () => {
        var iconName, iconColor;
        switch(title) {
            case 'My Listings':
                iconName = 'format-list-bulleted';
                iconColor = Colors.primary;
                break;
            case 'My Messages':
                iconName = 'email';
                iconColor = Colors.secondary;
                break;
            case 'Log Out':
                iconName = 'logout';
                iconColor = Colors.logoutYellow;
                break;
            default: 
                break;
        }
        return (
            <View style={[styles.iconWrapper, {backgroundColor: iconColor}]}>
                <MaterialCommunityIcons name={iconName} size={20} color={'white'}/>
            </View>
        )
    }

    return(
        <View style={styles.containerStyle}>
            {getIcon()}
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        flexDirection: 'row'
    },
    iconWrapper: {
        padding: 10,
        borderRadius: 25
    }
})