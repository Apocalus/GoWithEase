/*
import React from 'react';
import {View} from 'react-native';
import BusLocation from './locations/bus';
import TrainLocation from './locations/train';
import AirLocation from './locations/air';
// import {key} from './input';
import Error from './error';


//import index from app.js
export default function Mode(props){
  if (props.getkey == 9 || props.getkey == 10){
    switch(props.getkey, props.mode){
      case props.getkey == 9 && props.mode == 1:
        console.warn("Key 9 Mode 1");
        return(
        <View>
          <BusLocation/>
        </View>
        );
      case props.getkey == 10 && props.mode == 3:
        console.warn("Key 10 Mode 3");
        return(
          <View>
            <AirLocation/>
          </View>
        )
      default:
      console.warn("Error in switch case")
    }
  }
  else{
    switch(props.mode){
      case props.mode == 1:
        return(
          <View>
            <BusLocation/>
          </View>
        )
      case props.mode == 2:
        console.log("Train pressed");
        return(
          <View>
            <TrainLocation/>
          </View>
        )
      case props.mode == 3:
        console.log("Air pressed");
        return(
          <View>
            <AirLocation/>
          </View>
        )
      default: 
        console.warn("Error in else switch case");
    }
  }
}
*/