import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native';


export default class DetailsScreen extends Component {
    static navigationOptions= {
        title: 'Privacy Policy'
    }
//View til appens privatpolitik
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tortor metus. Etiam fringilla vel lorem posuere aliquet. Sed nec nulla vitae dolor hendrerit vestibulum. Fusce lacinia venenatis elit, nec eleifend turpis suscipit eu. Maecenas euismod dui venenatis mi mollis aliquam. Nulla venenatis sem ultrices massa bibendum, sit amet ultricies ex ultricies. Cras posuere finibus accumsan. Donec non vestibulum tellus. Mauris neque dui, tincidunt a congue non, tincidunt quis est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                    Morbi sed porttitor risus. Curabitur mattis porta leo bibendum porttitor. Integer euismod est quis lacus lobortis rutrum. Phasellus ut lobortis mauris. Aliquam sodales nisi sed ligula cursus interdum. Sed ante enim, dictum sit amet urna eget, accumsan semper nisl. Maecenas sit amet interdum erat, vitae congue turpis. Aliquam molestie, nisl sit amet lobortis malesuada, est lectus efficitur felis, in pellentesque nisl odio sit amet tellus. Cras viverra, nulla sit amet dapibus tristique, nibh turpis placerat leo, vitae porta mauris purus at nisl. In non urna risus. Duis euismod vulputate risus et interdum. Etiam hendrerit euismod varius. Sed a tortor pellentesque, congue purus sed, fermentum erat. Donec nulla urna, tempor quis mi in, porta dignissim velit. Cras suscipit.
                </Text>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        paddingTop:200,
        paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});
