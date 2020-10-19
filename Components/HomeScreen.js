import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import ArticleItem from "./Local/ArticleItem";
import {SafeAreaView} from "react-native";

//Startside, hvor der skal være et grid af tilfældige annoncer, som brugeren kan scrolle igennem
export default class HomeScreen extends Component {
    static navigationOptions= {
        title: 'Fodboldbørsen'
    }


    render() {
        const HomeScreenArticles = [
            "Article 1",
            "Article 2",
            "Article 3",
            "Article 4",
            "Article 5",
            "Article 6",
            "Article 7",
            "Article 8",
            "Article 9",
            "Article 10",
            "Article 11",
            "Article 12",
            "Article 13",
            "Article 14",
            "Article 15",
            "Article 16",
            "Article 17",
            "Article 18",
            "Article 19",
            "Article 20",
            "Article 21",
            "Article 22",
            "Article 23",
            "Article 24",
            "Article 25",
            "Article 26",
            "Article 27",
            "Article 28",
            "Article 29",
            "Article 30",
            "Article 31",
            "Article 32",
        ];


        const renderArticleItem = ({item}) => (
            <ArticleItem ArticleId={item}/>
        )

        return (
            <SafeAreaView style={styles.safeview}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:"https://cdn.pixabay.com/photo/2012/04/15/18/52/soccer-34898_960_720.png"}}/>
                <Text style={{justifyContent: 'space-between'}}> Velkommen til Fodboldbørsen!</Text>
                <Text style={{justifyContent: 'space-between'}}> Her vil der være et feed af tilfældige produkter</Text>
                <FlatList
                    contentContainerStyle={styles.wrapper}
                    data={HomeScreenArticles}
                    numColumns={2}
                    horizontal={false}
                    renderItem={renderArticleItem}
                    keyExtractor={item => item}
                />
            </View>
            </SafeAreaView>
        )
    }
}

    const styles = StyleSheet.create({
        inlineScroll: {
            height: '100%',
            paddingRight: 50,
            paddingLeft: 50,
        },
        wrapper: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 3,
            width: 200,
            height: 150,
            borderWidth: 10,
            borderColor: '#f0ead6',
        },

        container: {
            paddingTop:100,
            paddingBottom:100,
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f0ead6',
            height:'100%'
        },
        text: {
            fontSize: 20,
            paddingBottom: 100,
            paddingTop: 100,
        },

        text1: {
            fontSize: 30,
        },
        safeview: {
            flex: 1,
        },
        scrollView: {
          flex: 1,
        },
        image: {
                width: 200,
                height: 150,
        }

    });


