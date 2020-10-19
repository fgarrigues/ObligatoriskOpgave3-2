import React, { Component } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';

//Klasse der skal bruges til at fremsøge produkter
export default class SearchScreen extends Component {
    static navigationOptions= {
        title: 'Fodboldbørsen'
    }

    //Implementering af textinput felt samt knap
    render(){
        return (
            <SafeAreaView style={styles.safeview}>
            <View style={styles.container}>
                <Text style={{fontSize: 20, textAlign: 'center', paddingBottom: 40}}>Her kan du søge efter produkter</Text>
                <TextInput style={styles.input} placeholder={"Indtast navn på produkt"} placeholderTextColor={'black'}/>
                <Button title={"Søg på produkt"} onPress={this.handleGoToAnnoncer}/>
            </View>
            </SafeAreaView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        backgroundColor: '#f0ead6',
    },
    text: {
        fontSize: 20,
    },
    safeview: {
        flex: 1,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
});
