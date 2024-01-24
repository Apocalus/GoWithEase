import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text, Button, Modal, Image, FlatList } from 'react-native';
// import BusLocation from './Components/locations/bus';
// import AirLocation from './Components/locations/air';
// import TrainLocation from './Components/locations/train';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Mode from './Components/mode';
import * as Location from 'expo-location';

const destination = [
  {destination: 'Lahore, Punjab', key: '1'},
  {destination: 'Faisalabad, Punjab', key: '2'},
  {destination: 'Multan, Punjab', key: '3'},
  {destination: 'Islamabad, Punjab', key: '4'},
  {destination: 'Sialkot, Punjab', key: '5'},
  {destination: 'Quetta, Balochistan', key: '6'},
  {destination: 'Hyderabad, Sindh', key: '7'},
  {destination: 'Sukkar, Sindh', key: '8'},
  {destination: 'Attock, Punjab', key: '9'},
  {destination: 'Within Karachi', key: '10'},  
];

export default function App() {
  const [index, SetIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [location , setLocation]= useState(null);
  const [errorMsg , setErrorMsg]= useState(null);

  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(destination);
  const [key, setKey] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('');

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
  if(errorMsg)
  {
    alert("Please enable your location!");
  }
  else if(location) {
    text=JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {/*taking destination*/}
        <View style={styles.main}>
          <Modal
            transparent={true}
            visible={showModal}
            animationType="slide"  
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                
                {/*<UserInput/>*/}

                <View style={{flex: 1}}>
                  <TouchableOpacity
                    style={{
                      width: '90%',
                      height: 50,
                      borderRadius: 10,
                      borderWidth: 0.5,
                      alignSelf: 'center',
                      marginTop: 100,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingLeft: 15,
                      paddingRight: 15,
                    }}
                    onPress={() => {
                      setClicked(!clicked);
                    }}>
                    <Text style={{fontWeight:'600'}}>
                      {selectedDestination == '' ? 'Select Destination' : selectedDestination}
                    </Text>
                    {clicked ? (
                      <Image
                        source={require('./Components/pictures/upload.png')}
                        style={{width: 20, height: 20}}
                      />
                    ) : (
                      <Image
                        source={require('./Components/pictures/dropdown.png')}
                        style={{width: 20, height: 20}}
                      />
                    )}
                  </TouchableOpacity>
                  {clicked ? (
                    <View
                      style={{
                        elevation: 5,
                        marginTop: 20,
                        height: 300,
                        alignSelf: 'center',
                        width: '90%',
                        backgroundColor: '#fff',
                        borderRadius: 10,
                      }}>

                      <FlatList
                        data={data}
                        renderItem={({item, index}) => {
                          return (
                            <TouchableOpacity
                              style={{
                                width: '85%',
                                alignSelf: 'center',
                                height: 50,
                                justifyContent: 'center',
                                borderBottomWidth: 0.5,
                                borderColor: '#8e8e8e',
                              }}
                              onPress={() => {
                                setSelectedDestination(item.destination);
                                setClicked(!clicked);
                                setSearch('');
                                setKey(item.key);
                              }}>
                              <Text style={{fontWeight: '600'}}>{item.destination}</Text>
                            </TouchableOpacity>
                          );
                        }}
                      />
                    </View>
                  ) : null}
                  {/*<Button title="press" onPress={console.warn(key)}/>*/}
                </View>
                  <View style={styles.buttons}>
                  <TouchableOpacity onPress={() => SetIndex(1)}>
                    <IonIcon name ='bus' size = {30} style={styles.button} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => SetIndex(2)}>
                    <IonIcon name = 'train' size = {30} style={styles.button}/>
                  </TouchableOpacity>
                  </View>
                <Button title="Done" onPress={()=>setShowModal(false)} color= 'maroon'/>
              </View>
            </View>
          </Modal>

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
      <Button title="Change Option" onPress={()=>setShowModal(true)} color= 'maroon'/>
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
    justifyContent: 'space-around',
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

