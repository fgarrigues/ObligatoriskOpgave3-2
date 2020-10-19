import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {Alert, Button, SafeAreaView} from "react-native";

//Brugernes profil med navigation forbundet til de tre knapper
export default class ProfileScreen extends Component {
    static navigationOptions= {
        title: 'Fodboldbørsen'
    }
    GoToAds = () => {
        this.props.navigation.navigate('Ads');
    };

    GoToFavorites = () => {
        this.props.navigation.navigate('Likes')
    }

    GoToMyDetails = () => {
        this.props.navigation.navigate('Details')
    }
//Knapper samt profilbillede
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MIN PROFIL</Text>
                <Image style={styles.logo} source={{uri: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/26805440_10204219411762736_224536464218425622_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=35z4gz5H5u4AX85SNc_&_nc_ht=scontent-arn2-1.xx&oh=abf90486f89c5c2dfe3edf21a115fd07&oe=5FA84762"}}/>
                <Button onPress={this.GoToAds} title={"Mine annoncer"} style={styles.button}/>
                <Button onPress={this.GoToFavorites} title={"Mine favoritter"} style={styles.button}/>
                <Button onPress={this.GoToMyDetails} title={"Mine oplysninger"} style={styles.button}/>
            </View>

        );
    };
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#f0ead6',
        flexDirection: 'column',
    },
    text: {
        fontSize: 25,
        alignItems: 'center',
        fontStyle: "normal",

    },
    logo: {
        width: 150,
        height: 130,
        borderWidth: 10,
        borderColor: '#f0ead6',
        justifyContent: 'space-between',


    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        margin: 10,
    }
});
