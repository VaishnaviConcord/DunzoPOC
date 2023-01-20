import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Maps from "./Map"

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  reducers: {
    setAddress: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

const Stack = createStackNavigator();

const AddressForm = (props) => {
  
  const [address, setAddressState] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const dispatch = useDispatch();

  const handleChange = (text, field) => {
    setAddressState({
      ...address,
      [field]: text
    });
  }

  const navigateToMap = (navigation) => {
    props.navigation.navigate('CurrentLocationMap');
  }  

  const handleSubmit = () => {
    dispatch(setAddress(address))
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Type:</Text>
      <TextInput
        style={styles.input}
        value={address.name}
        onChangeText={text => handleChange(text, "name")}
      />
      <Text style={styles.label}>Street:</Text>
      <TextInput
        style={styles.input}
        value={address.street}
        onChangeText={text => handleChange(text, "street")}
      />
      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={address.city}
        onChangeText={text => handleChange(text, "city")}
      />
      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={address.state}
        onChangeText={text => handleChange(text, "state")}
      />
      <Text style={styles.label}>Zip:</Text>
      <TextInput
        style={styles.input}
        value={address.zip}
        onChangeText={text => handleChange(text, "zip")}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

        <View style={{margin:40, marginLeft:180}}>
            <Text style={styles.label}>Or</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={navigateToMap}>
            <Text style={styles.submitButtonText}>Use Map</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AddressForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop:70,
    alignSelf: 'stretch',
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 4,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
});
