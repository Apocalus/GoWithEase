import React from 'react';
import { View, Image } from 'react-native';
import {Marker} from 'react-native-maps';

let airLocations = [
  {
    title: "Jinnah International Airport",
    location: {
      latitude: 24.909458291663427, 
      longitude: 67.1675025969383
    },
    description: "Airport"
  },
]

export default function AirLocation() {
  const showAirLocations = () => {
    return airLocations.map((item, index) => {
      return(
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('../markers/airplane.png')}/>
            </View>
        </Marker>
      )
    })
  }
  return (
    <View style={{flex:1}}>
      {showAirLocations()}
    </View>
  ); 
}