import React,{Component} from 'react';
import {Text, View, ScrollView,StyleSheet } from 'react-native';

export default class ArticleItem extends Component{
    render() {
        const{ArticleId} = this.props
        return(
            <View >
                <Text>
                    "{ArticleId}"
                </Text>
            </View>

        )
    }
}
