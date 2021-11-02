import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator, DrawerContent} from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import CustomDrawer from "./custompage";
const Drawer= createDrawerNavigator();

function LogOut({navigation}) {
    return(
        <View style={{flex:1, alignItems: 'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>LogOut krlo</Text>
        </View>
    )
}
export default LogOut;
