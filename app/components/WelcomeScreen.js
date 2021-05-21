import React from 'react';
import {FlatList, View, Text, StyleSheet, Image, ImageBackground, Button, SafeAreaView } from 'react-native';
import bgImage from '../assets/background.jpg';
import logo from '../assets/logo-red.png';
import colors from '../config/colors';
import AuthButton from './AuthButton';
import jacket from '../assets/jacket.jpg'
import ListingDetailsScreen from './ListingDetailsScreen';
import mosh from '../assets/mosh.jpg';
import ImageView from './ImageView';
import MyAccountScreen from '../screens/MyAccountScreen';
import CardComponent from '../components/CardComponent';
import Colors from '../config/colors';

const WelcomeScreen = ({goToImageView}) => {

    const testListingUser = {
        listingUserImage: mosh,
        listingUserName: 'Mosh Hamedani',
        listingUserListings: 5
    }
    const testListings = [
        {
            id: '1',
            title: "Red Jacket",
            subtitle: "$100",
            image: jacket
        },
        {
            id: '2',
            title: "Red Jacket",
            subtitle: "$100",
            image: jacket
        }
    ]
    const renderItem = ({item}) => (
        <CardComponent listing={item}/>
    );

    return (
            <FlatList style={styles.listStyle}
                data={testListings}
                renderItem={renderItem} 
                keyExtractor={item => item.id}
            />
        // <MyAccountScreen />
        // <View style={styles.container}>
        //     <ImageBackground style={{width: '100%', height: '100%'}}source={bgImage} >
        //         <Image source={logo} style={styles.logo} />
        //         <Text style={styles.logoText}>Sell What You Don't Need</Text>
        //         <View style={styles.buttonParentContainer}>
        //             <AuthButton backgroundColor="primary" />
        //             <AuthButton backgroundColor="secondary" />
        //         </View>
        //     </ImageBackground>
        // </View>
        // <ListingDetailsScreen listingUserInfo={testListingUser} image={jacket} title={"Red jacket for sale"} subtitle={'$100'}/>
    )
}

const styles = StyleSheet.create({
    buttonParentContainer: {
        position: 'absolute',
        bottom: 40,
        width: '100%'
    },
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
    listStyle: {
        backgroundColor: Colors.gray,
        width: '100%',
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