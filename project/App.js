import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import Geolocation from "@react-native-community/geolocation";
import { StyleSheet, Text, View, PermissionsAndroid, Platform,Image} from 'react-native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
navigator.geolocation = require('@react-native-community/geolocation');
import Searchthelanearby from "./components/searchthelanearby";
import GetLocation from "react-native-get-location";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Settings from "./components/navigation/root";
import LogOut from "./components/navigation/custompage";
import {withAuthenticator} from "aws-amplify-react-native/src/Auth/index";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './/src/aws-exports';
Amplify.configure(awsconfig);
const Drawer =createDrawerNavigator()

const CustomDrawer=(props)=> {
    return (
        <DrawerContentScrollView{...props}>
            <View
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    padding:20,
                    backgroundColor:'#f6f6f6',
                    marginBottom:20,
                }}
            >
                <View>
                    <Image source={require('.//assets/PicsArt_05-16-11.38.15.jpg')} style={{width: 60, height: 60, borderRadius: 80,borderWidth:4,borderColor:Colors.black}}/>
                </View>
                <Text>Ufaq Haider</Text>
                <Text>ufaqhaider674@gmail.com</Text>
            </View>
            <DrawerItemList{...props} />
        </DrawerContentScrollView>
    )
}

const App: () => React$Node=()=>{
        useEffect(()=>{
        GetLocation.getCurrentPosition({
            enableHighAccuracy:true,
            timeout:15000,
        })
            .then((result)=>{setLocation(result)})
            .catch(()=>{})
    }, {})
        return (
        <NavigationContainer>
            <Drawer.Navigator  drawerContent={(props)=> <CustomDrawer{...props}/>
            }>
                <Drawer.Screen name="Home" component={Searchthelanearby}/>
                <Drawer.Screen name="Settings" component={Settings}/>
                <Drawer.Screen name="Logout" component={LogOut}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
    return(
        <>
            <Searchthelanearby/>
        </>
    );
};
export default withAuthenticator(App);
