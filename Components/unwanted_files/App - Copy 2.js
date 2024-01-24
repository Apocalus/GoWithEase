/*
import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text, Button, Modal } from 'react-native';
// import BusLocation from './Components/locations/bus';
// import AirLocation from './Components/locations/air';
// import TrainLocation from './Components/locations/train';
import IonIcon from 'react-native-vector-icons/Ionicons';
import UserInput from "./Components/input";
// import Buttons from "./Components/buttons";
import Mode from './Components/mode';
import * as Location from 'expo-location';


export default function App() {
  const [index, SetIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [location , setLocation]= useState(null);
  const [errorMsg , setErrorMsg]= useState(null);
  useEffect( () => {
    (async() => {
      let {status}= await Location.requestForegroundPermissionsAsync();
      if(status !=='granted')
      {
        setErrorMsg('Permission denied');
        return;
      }
      let location= await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

  },[]);
  let text= 'Waiting...';
  if(errorMsg)
  {
    text(errorMsg)
  }
  else if(location) {
    text=JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
        <View style={styles.main}>
          <Modal
            transparent={true}
            visible={showModal}
            animationType="slide"  
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
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
                <Button title="Done" onPress={()=>setShowModal(false)} color= 'maroon'/>
              </View>
            </View>
          </Modal>
          <View style={styles.buttonView}>
          </View>
        </View>

      <MapView style={styles.map} showsMyLocationButton = {true} showsUserLocation = {true}
      initialRegion={
        {
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.9922,
          longitudeDelta: 0.521,
        }
      }>
       <Mode mode={index}/> 
      </MapView>
      <Button title="Change" onPress={()=>setShowModal(true)} color= 'maroon'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '95%',
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
  },
    main: {
      flex:1
    },
    buttonView: {
      flex:1,
      justifyContent: 'flex-end'
    },
    centeredView: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: 'white',
      padding: 40,
      borderRadius: 20,
      shadowColor: 'black',
      elevation: 5
    }
});

*/