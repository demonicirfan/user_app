import React from "react";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {View,Dimensions} from 'react-native';
import Differenthelas from "../../components/different_thelas";
import RouteMap from "../../components/routemap";
 const HomeScreen=(props)=> {
     return(
         <View style={{display:'flex', justifyContent:'space-between'}}>
             <View style={{height:Dimensions.get('window').height -400,}}>
                 <RouteMap/>
             </View>
             <View style={{height:400 }} >
              <Differenthelas/>
             </View>
         </View>
     );
 };

 export default HomeScreen;