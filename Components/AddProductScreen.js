import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';


//Klasse hvor brugeren kan tilføje sin annoncer, på nuværende tidspunkt ingen funktionalitet i knapper og textinputfelter
export default class AddProductScreen extends Component {
    static navigationOptions = {
        title: 'Fodboldbørsen'
    }

    state = {
        Produktnavn: '',
        Produktstr: '',
    }

    handleProduktnavn = (Produktnavn) => {
        this.setState({Produktnavn: text})
    }

    handleProduktstr = (Produktstr) => {
        this.setState({Produktstr: text})
    }

    //På sigt implementering af kamerafunktion, så brugeren kan tage billeder af produktet
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Her kan du tilføje produkter</Text>
                <TextInput style={styles.input}
                           placeholder={"Indtast navn på produkt"}
                           placeholderTextColor={'black'}

                />
                <TextInput style={styles.input}
                           placeholder={"Indtast størrelse på produkt"}
                           placeholderTextColor={'black'}

                />
                <Button onPress={this.addAnnonce} title={"Tilføj annonce"} style={styles.submitButton}/>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        backgroundColor: '#f0ead6',
    },
    text: {
        fontSize: 20,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
});
