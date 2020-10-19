import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";



//Klasse der indeholder information omkring virksomheden samt knap med navigation til detailsScreen
export default class SettingsScreen extends Component {
    static navigationOptions= {
        title:'Fodboldbørsen'
    }
    handleGoToDetails = () => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Details');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={{justifyContent: 'space-between', alignContent: 'center'}}>Fodboldbørsen er din markedsplads for køb og salg af brugt fodboldudstyr. Appen gør det nemt, hurtigt og sikkert at handle secondhand fodboldudstyr online. Gennem din tilknyttede profil på appen, får du adgang til et stort udvalg af brugt fodboldudstyr, der inkluderer fodboldtrøjer, -støvler og træningsudstyr. </Text>
                <Button title="Go to privacy policy" onPress={this.handleGoToDetails} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: 'white',
        borderWidth: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0ead6',
        height:'100%'
    },
    text: {
        fontSize: 20,
        justifyContent: 'space-between',
        paddingTop: 200,
    },
});
