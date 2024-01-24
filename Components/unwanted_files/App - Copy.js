/*
import MapView from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import BusLocation from './Components/locations/bus';
import AirLocation from './Components/locations/air';
import TrainLocation from './Components/locations/train';
import UserInput from "./Components/input";
import Buttons from "./Components/buttons";
import Mode from './Components/mode';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.bottom}>
        <UserInput/>
        <Buttons/>
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
       <Mode/>
       
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
  }
});
*/