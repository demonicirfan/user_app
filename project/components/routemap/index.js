import React from 'react';
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY ='AIzaSyAz7DsC7BD6aflaqt06jLrUg4pM9ccDxCs';
const RouteMap = (props) => {
 const origin = {
    latitude: 26.867630,
    longitude: 80.880580,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const destination = {
    latitude: 26.826260,
    longitude: 80.914818,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 26.867630,
        longitude: 80.880580,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
          lineDashPattern={[0]}
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY} // insert your A
          strokeWidth={4}
          strokeColor={'#4f990b'}

        />
        <Marker coordinate={origin}
        title={'Origin'}/>
        <Marker coordinate={destination}
        title={'Destination'}/>
    </MapView>

  );
};

export default RouteMap;
