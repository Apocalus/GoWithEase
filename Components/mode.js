import React from 'react';
import {View} from 'react-native';
import BusLocation from './locations/bus';
import TrainLocation from './locations/train';
import AirLocation from './locations/air';
// import {key} from './input';



//import index from app.js
export default function Mode(props){
  if (props.mode == 1){
    return(
      <View>
        <BusLocation/>
      </View>
    )
  }
  if (props.mode == 2){
    return(
      <View>
        <TrainLocation/>
      </View>
    )
  }
  else{
    console.warn("error")
  }
}