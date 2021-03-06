import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../config/colors';

export default function ListingDetailsScreen({image, listingUserInfo, title, subtitle}) {
    const styles = StyleSheet.create({
        mainContainerStyle: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        itemImageStyle: {
            width: '100%',
            height: '33%'
        },
        titleStyle: {
            fontSize: 25
        },
        subtitleStyle: {
            color: Colors.secondary,
            fontSize: 20,
            marginTop: 10,
            fontWeight: '500'
        },
        textViewContainer: {
            width: '100%',
            color: '#000',
            paddingTop: 20,
            paddingLeft: 20
        },
        listingUserContainerStyle: {
            marginTop: 50,
            width: '90%',
            flex: 0.5,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'row'
        },
        listingUserImageContainer: {
            flex: 0.15
        },
        listingUserTextContainer: {
            flex: 0.85
        },
        userImageStyle: {
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
        },

    })

    const {listingUserImage, listingUserName, listingUserListings} = listingUserInfo

    return (
        <View style={styles.mainContainerStyle}>
            <Image source={image} style={styles.itemImageStyle} />
            <View style={styles.textViewContainer}>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.subtitleStyle}>{subtitle}</Text>
            </View>
            <View style={styles.listingUserContainerStyle}>
                <View style={styles.listingUserImageContainer}>
                    <Image style={styles.userImageStyle} source={listingUserImage} />
                </View>
                <View style={styles.listingUserTextContainer}>
                    <Text style={{fontWeight: '700'}}>{listingUserName}</Text>
                    <Text style={{color: '#777'}}>{listingUserListings} Listings</Text>
                </View>
            </View>
        </View>
    )

}