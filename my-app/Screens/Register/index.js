import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, ActivityIndicator } from 'react-native';
import React, { useState } from "react";


export default function Register() {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const InputView = ({value, onChangeText, placeholder, secureTextEntry, imagename,ref})  => {

        return (
        <View style={styles.SectionStyle}>
            <Image
    source={imagename}
    style={styles.ImageStyle}
     />
           <TextInput style={{ flex: 1 }}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={ onChangeText }
            ref={{ref}}
            />
            </View>
        );

    }
    
    const signUpAction = () => {
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

        if (!userPhoneNumber) {
            alert('Please Enter Phonenumber');
            return;
        }

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!(reg.test(userEmail) === true)) {
            alert('Please Enter Valid Email');
            return;
        }
        
        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
        };

        

        return (
            <View style={styles.container}>
                <>
                    <Text style={styles.signuptext}>Sign Up</Text>
                    
<InputView placeholder="Enter Your Name Here"
   secureTextEntry="false"
   ref={input => { this.name = input }}
    onChangeText={(UserName) => setUserName(UserName)}
  imagename={require('../Assets/name.png')}> </InputView>

<InputView placeholder="Enter Your Email Here"
   secureTextEntry="false"
   ref={input => { this.email = input }}
   onChangeText={(UserEmail) => setUserEmail(UserEmail)}
  imagename={require('../Assets/email.png')}> </InputView>

<InputView placeholder="Enter Your Password Here"
   secureTextEntry="true"
   ref={input => { this.password = input }}
   onChangeText={(UserPassword) => setUserPassword(UserPassword)}
  imagename={require('../Assets/password.png')}> </InputView>

<InputView placeholder="Enter Your Phone Number Here"
   secureTextEntry="false"
   ref={input => { this.phonenumber = input }}
   onChangeText={(UserPhoneNumber) => setUserPhoneNumber(UserPhoneNumber)}
  imagename={require('../Assets/phonenumber.png')}> </InputView>

<Pressable style={styles.signup} onPress={signUpAction}>
      <Text style={styles.title}>{"Sign Up"}</Text>
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
            borderWidth: 2,
            padding: 10,
            borderBottomWidth: 0,
            fontWeight: "bold",
        },
        passwordInput: {
            backgroundColor: '#fff',
            borderColor: '#EDECEC',
            borderWidth: 2,
            padding: 10,
        },
        text: {
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: 5,
            fontSize: 20,
            fontWeight: 'bold',
        },
        referralcode: {
            fontSize: 15,
            marginTop: 20,
            fontWeight: 'bold',
            color: "#2265E5",
        },
        signup: {
            fontSize: 20,
            fontWeight: 'bold',
            borderRadius: 10,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FC8019",
            marginTop: 100,
            marginLeft:10,
            marginRight:10,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: "#FFFFFF",
        },
        signuptext: {
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 30,
            fontWeight: "bold",
            marginTop: 100,
            color: '#FC8019',
        },    
        SectionStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f4fc',
            borderWidth: 0.5,
            borderColor: '#f0f4fc',
            height: 50,
            borderRadius: 5,
            margin: 10,
        },
        ImageStyle: {
            padding: 10,
            margin: 15,
            height: 20,
            width: 20,
            resizeMode: 'stretch',
            alignItems: 'center',
        },
    });

 