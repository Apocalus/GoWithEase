import React from 'react';
import { View, Image } from 'react-native';
import {Marker} from 'react-native-maps';

const trainData = [
  {latitude: 28.626, longitude: 77.2351},
  {latitude: 28.648, longitude: 77.216721},
  {latitude: 28.5562, longitude: 77.210403},
  {latitude: 28.6262, longitude: 77.20434}
]

export default function TrainLocation() {
  return (
    <View style={{flex:1}}>
      {
        trainData.map((item) => {
          return(
            <Marker coordinate={item} title = "Train station">
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('../markers/train-station.png')}/>
            </View>
            </Marker>
          )
        })
      }
    </View>
  );
}
