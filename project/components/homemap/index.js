import React from "react";
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import {View,Text,Dimensions,Image,FlatList} from 'react-native';
import Differenthelas from "../different_thelas";
import MapOverlay from "react-native-maps/lib/components/MapOverlay";
import cars from '../../assets/data/cars';
import RouteMap from "../routemap";
const HomeMap = (type) => {
   const getImage =(type)=>  {
        if (type === 'Sabzi Thela') {
            return require('../../assets/brwn-thela-min_optimized.png');
        }
        if (type === 'Phal Thela') {
            return require('../../assets/without-bg-thela-1-min_optimized.png');
        }
        return require('../../assets/11.png');
    };

  return (
      <MapView
        style={{width:'100%',height:'100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude:26.86076238103454,
          longitude: 80.88032449671913,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {cars.map((car)=>(
            <Marker
                key={car.id}
                coordinate={{latitude:car.latitude,longitude:car.longitude}}
            >
                <Image
                    style={{width:70,height:70,resizeMode:'contain'}}
                    source={getImage(car.type)}
                />
            </Marker>
        ))}
     </MapView>
  );

};

export default HomeMap;
