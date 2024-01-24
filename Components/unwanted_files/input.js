/*
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
//import Global from './global';
import Mode from './mode';

const destination = [
  {destination: 'Lahore, Punjab', key: '1'},
  {destination: 'Faisalabad, Punjab', key: '2'},
  {destination: 'Multan, Punjab', key: '3'},
  {destination: 'Islamabad, Punjab', key: '4'},
  {destination: 'Sialkot, Punjab', key: '5'},
  {destination: 'Quetta, Balochistan', key: '6'},
  {destination: 'Hyderabad, Sindh', key: '7'},
  {destination: 'Sukkar, Sindh', key: '8'},
  {destination: 'Within Karachi', key: '9'},
  {destination: 'Outside Pakistan', key: '10'},
  
];
export default function UserInput ()  {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(destination);
  const [key, setKey] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('');
  return (
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
            source={require('./pictures/upload.png')}
            style={{width: 20, height: 20}}
          />
        ) : (
          <Image
            source={require('./pictures/dropdown.png')}
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
    </View>
  );
}
*/
