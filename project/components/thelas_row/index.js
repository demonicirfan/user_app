import React from "react" ;
import {View, Image,Text} from "react-native";
import styles from "./styles";
import HomeMap from "../homemap";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView , {PROVIDER_GOOGLE} from "react-native-maps";

const Thelasrow =(props) => {
    const {type} = props;

    const getImage =()=>  {
        if (type.type === 'Sabzi Thela') {
            return require('../../assets/10.png');
        }
        if (type.type === 'Phal Thela') {
            return require('../../assets/brwn-thela-min_optimized.png');
        }
        return require('../../assets/12.png');
    }

    return(
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={getImage()}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{' '}
                    <Ionicons name={'person'} size={16}/>
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.types} >
                    {type.distance}{' '}
                </Text>
            </View>
        </View>
    );
};

export default Thelasrow;
