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
  switch(props.getkey){
    case props.getkey == 10:
      if(props.mode == 3){
        console.warn("Key 10 Mode 3");
        return(
          <View>
            <AirLocation/>
          </View>
        )
      }
      else{
        console.warn("Error 10/3");
      }
      break;
    case props.getkey == 9:
      if(props.mode == 1){
        console.warn("Key 9 Mode 1");
        return(
        <View>
          <BusLocation/>
        </View>
        ) 
      }
      else{
        console.warn("Error 9/1");
      }
      break;
    default:
      if (props.mode == 1){
        console.log("Bus pressed");
        return(
          <View>
            <BusLocation/>
          </View>
        )
      }
      if (props.mode == 2){
        console.log("Train pressed");
        return(
          <View>
            <TrainLocation/>
          </View>
        )
      }
      if (props.mode == 3){
        console.log("Air pressed");
        return(
          <View>
            <AirLocation/>
          </View>
        )
      }
      else{
        console.warn("Error message")
      }
      break;
  }
}
*/