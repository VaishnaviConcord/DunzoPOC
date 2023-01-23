import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, ActivityIndicator } from 'react-native';
import React, { useState } from "react";

export default function Register() {
    var userName, userEmail, userPassword, userPhoneNumber;

    const InputView = ({ onChangeText, placeholder, secureTextEntry, imagename, name, text }) => {
        return (
            <View style={styles.sectionStyle}>
                <Image
                    source={imagename}
                    style={styles.imageStyle}
                />
                <TextInput style={{ flex: 1 }}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    name={name}
                    onChangeText={text => handleChange({ name, text })}
                />
            </View>
        );
    }

   const handleChange = (event) => {
        if (event.name == "username") {
            userName = event.text
        }
        else if (event.name == "password") {
            userPassword = event.text
        }
        else if (event.name == "email") {
            userEmail = event.text
        }
        else if (event.name == "phonenumber") {
            userPhoneNumber = event.text
        }
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

        if (userPhoneNumber.length != 10) {
            alert('Please Enter Valid Phone number');
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
            }
            );
    };

    return (
        <View style={styles.container}>
            <>
                <Text style={styles.signupText}>Sign Up</Text>

                <InputView placeholder="Enter Your Name Here"
                    secureTextEntry="false"
                    onChange={handleChange}
                    name="username"
                    imagename={require('../Assets/name.png')}> </InputView>

                <InputView placeholder="Enter Your Email Here"
                    secureTextEntry="false"
                    onChange={handleChange}
                    name="email"
                    imagename={require('../Assets/email.png')}> </InputView>

                <InputView placeholder="Enter Your Password Here"
                    secureTextEntry="true"
                    onChange={handleChange}
                    name="password"
                    imagename={require('../Assets/password.png')}> </InputView>

                <InputView placeholder="Enter Your Phone Number Here"
                    secureTextEntry="false"
                    onChange={handleChange}
                    name="phonenumber"
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
   signup: {
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FC8019",
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFFFFF",
    },
    signupText: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 30,
        fontWeight: "bold",
        marginTop: 50,
        color: '#FC8019',
    },
    sectionStyle: {
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
    imageStyle: {
        padding: 10,
        margin: 15,
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

