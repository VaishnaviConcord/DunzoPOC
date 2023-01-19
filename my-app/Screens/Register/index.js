import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useState } from "react";


export default function Register() {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState("")

  const signUpAction = () => {
    
    if (!userPhoneNumber) {
      alert('Please Enter Phonenumber');
      return;
    }
    if (!userName) {
      alert('Please Enter Name');
      return;
    }
    if (!userEmail) {
      alert('Please Enter Email');
      return;
    }
    if (!userPassword) {
      alert('Please Enter Password');
      return;
    }
    
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if (!(reg.test(userEmail) === true)){
            alert('Please Enter Valid Email');
            return;
           }
            
  const params = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
        name: userName,
        phone: userPhoneNumber,
        email: userEmail,
        password: userPassword,
      }),
};
fetch('https://63c798f8e52516043f4097d2.mockapi.io/donzo/Api/users', params)
  .then(response => response.json())
  .then(data => {
    alert("User Registered")
    this.name.clear();
                          this.email.clear();
                          this.phonenumber.clear();
                          this.password.clear();
                          setUserName("")
                          setUserEmail("")
                          setUserPassword("")
                          setUserPhoneNumber("")
    
  }
    );
 }

  const referralcodeAction = () => 
    {
      alert('Referral code');
    }

 return (
     <View style={styles.container}>
      <>
      <Text style={styles.signuptext}>Sign Up</Text>
      <Text style={styles.logintext}>
      or 
    <Text style={{color: '#DA1B1B'}}> login into your account</Text> 
    </Text>
    <TextInput
        ref={input => { this.phonenumber = input }}
        style={styles.input}
        placeholder={"Phone number"}
        keyboardType='numeric'
         onChangeText={(UserPhoneNumber) => setUserPhoneNumber(UserPhoneNumber)}
      />
      <TextInput
        style={styles.input}
        ref={input => { this.name = input }}
        placeholder={"Name"}
         onChangeText={(UserName) => setUserName(UserName)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        ref={input => { this.email = input }}
        placeholder={"Email"}
        onChangeText={(UserEmail) => setUserEmail(UserEmail)}
        autoCapitalize={"none"}
      />
       <TextInput
        style={styles.passwordInput}
        ref={input => { this.password = input }}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(UserPassword) => setUserPassword(UserPassword)}
      />
       <Pressable onPress={referralcodeAction}>
<Text style={styles.referralcode}> Have a referral code?
</Text> 
</Pressable>

      <Pressable style={styles.signup} onPress={signUpAction}>
      <Text style={styles.title}>{"Continue"}</Text>
    </Pressable>
    </>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 20,
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#EDECEC',
    borderWidth:2,
    padding:10,
    borderBottomWidth:0,
    fontWeight:"bold",
  },
  passwordInput: {
    backgroundColor: '#fff',
    borderColor: '#EDECEC',
    borderWidth:2,
    padding:10,
  },
  text: {
    justifyContent: 'center',
    textAlign:'center',
    marginBottom:5,
    fontSize:20,
    fontWeight:'bold',
  },
  referralcode: {
  fontSize: 15,
  marginTop:20,
  fontWeight:'bold',
  color:"#2265E5",
  },
  signup: {
    fontSize:20,
    fontWeight:'bold',
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC8019",
    marginTop:150,
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
    color:"#FFFFFF",
  },
  signuptext: {
  textAlign:'left',
  fontSize: 24,
  marginBottom:10,
  fontWeight:"bold",
  marginTop:100,
  },
  logintext: {
  textAlign:'left',
  fontSize: 15,
  marginBottom:30,
  fontWeight:'bold',
  },
});


