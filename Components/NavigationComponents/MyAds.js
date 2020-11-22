import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

//Klasse til at vise brugerens annoncer
export default class MyAds extends Component {
    //Brugt som header for hele appen
    static navigationOptions= {
        title:'Fodboldbørsen'
    }
    //Opsat så der kan trykkes på annoncerne - tiltænkt at de skal indeholde billeder og info
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Annoncer</Text>
                <TouchableOpacity>
                        <Text style={styles.text}>Min annonce 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                        <Text style={styles.text}>Min annonce 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Min annonce 3</Text>
                </TouchableOpacity>
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
});
