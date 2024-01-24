import React from 'react';
import { View, Image } from 'react-native';
import {Marker} from 'react-native-maps';

let trainLocations = [
  {
    title: "Kotri Junction",
    location: {
      latitude: 25.63412188796188, 
      longitude: 68.35404555274434
    },
    description: "Train Station"
  },
  {
    title: "Pakistan Railways Karachi Cantonment Station",
    location: {
      latitude: 24.844118590550995, 
      longitude: 67.04122000038498
    },
    description: "Train Station"
  },
  {
    title: "Karachi City Station",
    location: {
      latitude: 24.849442174390767,
      longitude: 67.00375599855595
    },
    description: "Train Station"
  },
  {
    title: "Kimari Railway Station",
    location: {
      latitude: 24.82488371455232, 
      longitude: 66.97789435435672
    },
    description: "Train Station"
  },
  {
    title: "Airport Railway Station",
    location: {
      latitude: 24.885812765645344, 
      longitude: 67.15461242367294
    },
    description: "Train Station"
  },
  {
    title: "Malir railway station",
    location: {
      latitude: 24.87832669984195, 
      longitude: 67.19046798891398
    },
    description: "Train Station"
  },
  {
    title: "Landhi Railway Station",
    location: {
      latitude: 24.851048421135694, 
      longitude: 67.21195616785043 
    },
    description: "Train Station"
  },
  {
    title: "Drigh Road Railway Station",
    location: {
      latitude: 24.886529595041978, 
      longitude: 67.12601058319376
    },
    description: "Train Station",
  },
]

export default function TrainLocation() {
  const showTrainLocations = () => {
    return trainLocations.map((item, index) => {
      return(
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('../markers/train-station.png')}/>
            </View>
        </Marker>
      )
    })
  }
  return (
    <View style={{flex:1}}>
      {showTrainLocations()}
    </View>
  ); 
}
