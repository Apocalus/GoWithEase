/*
import React from 'react';
import { View, Image } from 'react-native';
import {Marker} from 'react-native-maps';

const busData = [
  {latitude: 28.62692, longitude: 77.2351},
  {latitude: 28.6448, longitude: 77.216721},
  {latitude: 28.556219, longitude: 77.210403},
  {latitude: 28.62627, longitude: 77.20434}
]

const trainData = [
  {latitude: 28.626, longitude: 77.2351},
  {latitude: 28.648, longitude: 77.216721},
  {latitude: 28.5562, longitude: 77.210403},
  {latitude: 28.6262, longitude: 77.20434}
]

const planeData = [
  {latitude: 28.565761, longitude: 77.100648},
  {latitude: 28.565469, longitude: 77.103362},
]

export default function Location() {
  return (
    <View style={{flex:1}}>
      {
        busData.map((item) => {
          return(
            <Marker coordinate={item} title = "Bus Stop">
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('./markers/bus.png')}/>
            </View>
            </Marker>
          )
        })
      }
      {
        trainData.map((item) => {
          return(
            <Marker coordinate={item} title = "Train station">
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('./markers/train-station.png')}/>
            </View>
            </Marker>
          )
        })
      }
      {
        planeData.map((item) => {
          return(
            <Marker coordinate={item} title = "Airport">
            <View>
              <Image resizeMode = 'contain' style={{height: 50, width: 50}} source = {require('./markers/airplane.png')}/>
            </View>
            </Marker>
          )
        })
      }
      
    </View>
  );
}
*/