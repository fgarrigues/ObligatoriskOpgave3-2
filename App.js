import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import SearchScreen from "./Components/SearchScreen";
import AddProductScreen from "./Components/AddProductScreen";
import MyAds from "./Components/NavigationComponents/MyAds";
import SettingsScreen from "./Components/NavigationComponents/SettingsScreen";
import DetailsScreen from "./Components/NavigationComponents/DetailsScreen";
import { createAppContainer } from 'react-navigation';
import {Image,StyleSheet, Header} from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {createStackNavigator} from "react-navigation-stack";
import Constants from 'expo-constants';
import MyFavorites from "./Components/NavigationComponents/MyFavorites";
import MyDetails from "./Components/NavigationComponents/MyDetails";


//Oprettelse af stacks også til senere brug, så der kan oprettes navigation
const HomeStack = createStackNavigator(
    {
        Home: {screen: HomeScreen}
    }
)
const SearchStack = createStackNavigator(
    {
        Search: {screen: SearchScreen}
    }
)

const AddProdStack = createStackNavigator(
    {
        AddProd: {screen: AddProductScreen}
    }
)

const ProfileStack = createStackNavigator(
    {
        Profile: {screen: ProfileScreen},
        Ads: {screen: MyAds},
        Likes: {screen: MyFavorites},
        Details: {screen: MyDetails},
    })

const SettingStack = createStackNavigator({
    Settings: { screen: SettingsScreen},
    Details:{screen: DetailsScreen}
        },
)

const styles = StyleSheet.create({
    tabIcon: {
        width: 32,
        height: 32,
    },
});

// TabNavigator til at skifte mellem de forskellige screens
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel:"Home ",
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="home" size={24} color={tintColor} />
                )
            }
        },

        Search : {
            screen : SearchStack,
            navigationOptions: {
                tabBarLabel: "Search",
                tabBarIcon: ({tintColor}) => (
                    <FontAwesome5 name="search" size={24} color={tintColor}/>
                )

            }
        },
        AddProduct : {
            screen : AddProdStack,
            navigationOptions: {
                tabBarLabel: "Add",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-add-circle-outline" size={24} color={tintColor}/>
                )

            }
        },
        Profile : {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="user" size={24} color={tintColor}/>
                )
            }
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: {
                tabBarLabel:"Settings",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-settings" size={24} color={tintColor} />
                )
            },
        },
    },
    /*Generelle label indstillinger*/
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            size:40
        }
    }

)

export default createAppContainer(TabNavigator);


