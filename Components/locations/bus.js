import React from 'react';
import { View, Image } from 'react-native';
import {Marker} from 'react-native-maps';

let busLocations = [
  {
    title: "Gulshan Chowrangi Bus Stop",
    location: {
      latitude: 24.922070824767847,  
      longitude: 67.09414228156834
    },
    description: "Bus Stop"
  },
  {
    title: "Al Asif New Bus Terminal",
    location: {
      latitude: 24.953643587750072,  
      longitude: 67.0950085662276
    },
    description: "Bus Stop"
  },
  {
    title: "20 Number Bus Stop",
    location: {
      latitude: 24.819516500520663, 
      longitude: 66.99504733738766
    },
    description: "Bus Stop"
  },
  {
    title: "Shahrah Noor Jahan Road Bus Stop",
    location: {
      latitude: 24.960582586158225, 
      longitude: 67.05118323739256
    },
    description: "Bus Stop"
  },
  {
    title: "Eid Gah Chowk Bus Stop",
    location: {
      latitude: 24.850437703162605, 
      longitude: 67.08931089505971
    },
    description: "Bus Stop"
  },
  {
    title: "Nazimabad 7 Number Bus Stop",
    location: {
      latitude: 24.918659368676554,  
      longitude: 67.03108546437849
    },
    description: "Bus Stop"
  },
  {
    title: "Drigh Road Bus Stop",
    location: {
      latitude: 24.887109696364455, 
      longitude: 67.12832080855458
    },
    description: "Bus Stop"
  },
  {
    title: "Kamran Chowrangi Bus Stop",
    location: {
      latitude: 24.92389150054584, 
      longitude: 67.1377730220494
    },
    description: "Bus Stop",
  },
]

export default function BusLocation() {
  const showBusLocations = () => {
    return busLocations.map((item, index) => {
      return(
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('../markers/bus.png')}/>
            </View>
        </Marker>
      )
    })
  }
  return (
    <View style={{flex:1}}>
      {showBusLocations()}
    </View>
  ); 
}
