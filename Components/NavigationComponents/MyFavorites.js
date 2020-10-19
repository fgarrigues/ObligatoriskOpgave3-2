import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';
import {Divider} from "react-native-elements";

export default class MyAds extends Component {
    static navigationOptions= {
        title:'Fodboldbørsen'
    }
//Klasse til brugerens favoritter, så disse kan findes frem senere
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Favoritter</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>Min favorit 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Min favorit 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>Min favorit 3</Text>
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
