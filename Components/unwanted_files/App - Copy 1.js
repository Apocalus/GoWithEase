{/*
import MapView from 'react-native-maps';
import {useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
// import BusLocation from './Components/locations/bus';
// import AirLocation from './Components/locations/air';
// import TrainLocation from './Components/locations/train';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import UserInput from "./Components/input";
// // import Buttons from "./Components/buttons";
// import Mode from './Components/mode';

export default function App() {
  const [index, SetIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style = {styles.bottom}>
        <UserInput/>
      <View style={styles.buttons}>
      <TouchableOpacity onPress={() => SetIndex(1)}>
        <IonIcon name ='bus' size = {30} style={styles.button} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => SetIndex(2)}>
        <IonIcon name = 'train' size = {30} style={styles.button}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => SetIndex(3)}>
        <IonIcon name = 'airplane' size = {30} style={styles.button}/>
      </TouchableOpacity>
      </View>
      </View>
      <MapView style={styles.map}
      initialRegion={
        {
          latitude: 28.6448,
          longitude: 77.216721,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      }>
      {/**do smth about this 
       <BusLocation/> 
       <TrainLocation/>
       <AirLocation/>
       <Mode mode={index}/>
       
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '70%',
  },
  bottom: {
    width: '100%',
    position: 'absolute', 
    bottom: 0, 
  },
  buttons: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection:'row', 
    flexWrap:'wrap',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 1,
    backgroundColor: 'maroon',
    color: 'white'
  }
});

*/}