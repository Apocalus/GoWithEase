import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';




export default function UserInput() {
  //testing input for location and destination
  /*const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("")*/


  return (
    <View>
      {/*testing for input values - location and destination
      <Text>Current Location : {location}</Text>
      <Text>Destination : {destination}</Text>*/}

      {/*taking destination*/}
      <TextInput
        style={styles.textInput}
        placeholder="Destination"
        /*  onChangeText = {(text)=> setDestination(text)} */
      />
           
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'maroon'
  },
});