import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class MyAds extends Component {
    static navigationOptions= {
        title:'Fodboldbørsen'
    }
//Klasse for oplysninger på brugeren, samt knap til at ændre oplysninger
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Oplysninger</Text>
                    <Text style={styles.text}>Navn: Frederik Garrigues</Text>
                    <Text style={styles.text}>Email: frga18ab@student.cbs.dk</Text>
                    <Text style={styles.text}>Telefonnummer: 12 34 56 78</Text>
                <Button style={styles.button} title={'Ændr oplysninger'} onPress={this.GoToAds}/>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
        paddingBottom:250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0ead6',
        height:'100%'

    },
    header: {
        fontSize: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
        justifyContent: 'space-between',
        flex: 0,
        flexDirection: 'row',
        textAlign: 'left',
        paddingBottom: 40,
    },
    button: {
        borderColor: 'black',
        borderWidth: 5,
    }
});
