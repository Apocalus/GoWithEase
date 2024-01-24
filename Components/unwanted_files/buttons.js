import React, {useState} from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';


export default function Buttons() {
  const [index, SetIndex] = useState(0);
  const warn = () => {
    console.warn("Pressed")
  }
  return (
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
  );
}

const styles = StyleSheet.create({
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