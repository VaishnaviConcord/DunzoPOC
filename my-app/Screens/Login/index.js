// import { View , Text} from "react-native"
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import { Alert, KeyboardAvoidingView,Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from "./styles";
const Login = ({navigation}) =>{
    // const { cleanedHmObj } = useSelector((state) => state.hmCleaner);
    // console.log(cleanedHmObj,"console.log(cleanedHmObj);");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log(email,password)

  //  const navigation = useNavigation("Home")

  const handleSignUp = () => {
    if(email === "mohd" && password === "123"){
      Alert.alert(`thank you ${email}`)
      navigation.navigate("Home")
    }else{
      Alert.alert(`email and password is incorrect`)
    }
  }

  const handleLogin = () => {
    if(email === "mohd" && password === "123"){
      Alert.alert(`thank you ${email}`)
      navigation.navigate("SendPackage")
    }else{
      Alert.alert(`email and password is incorrect`)
    }
  }
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  // const handleLogin = () => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Logged in with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }


    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={()=>handleSignUp()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>handleLogin()}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
} 

export default Login

