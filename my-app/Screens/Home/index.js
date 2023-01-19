import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { auth } from '../firebase'
import styles from "./styles";

const Home = () => {
  const navigation = useNavigation()

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login")
  //     })
  //     .catch(error => alert(error.message))
  // }

  const handleSignOut = () => {
    // if(email === "mohd" && password === "123"){
    //   Alert.alert(`thank you ${email}`)
      navigation.replace("Login")
    // }else{
    //   Alert.alert(`email and password is incorrect`)
    // }
  }

  return (
    <View style={styles.container}>
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      <Text>Email</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

