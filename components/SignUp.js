import React, { useState } from 'react';

import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';



export default function SignUp() {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [faceType, setFaceType] = useState('');



    const handleSignUp = async () => {

        if (password !== confirmPassword) {

            Alert.alert('Error', 'Passwords do not match.');

            return;

        }



        try {

            const response = await fetch('https://miki.a2gakhir.com/api/signup', {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',

                },

                body: JSON.stringify({

                    name,

                    email,

                    password,

                    password_confirmation: confirmPassword,

                    face_type: [faceType],

                }),

            });







            if (response.ok) {

                Alert.alert('Success', 'Sign up successful!');

            } else {

                Alert.alert('Error', 'An error occurred. Please try again.');

            }

        } catch (error) {

            console.error('Error:', error);

            Alert.alert('Error', 'An error occurred. Please try again.');

        }

    };



    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.form}>

                <Text style={styles.title}>Sign Up</Text>



                <Text>Name</Text>

                <TextInput

                    style={styles.input}

                    onChangeText={setName}

                    value={name}

                    placeholder="Enter your name"

                />



                <Text>Email</Text>

                <TextInput

                    style={styles.input}

                    onChangeText={setEmail}

                    value={email}

                    placeholder="Enter your email"

                    keyboardType="email-address"

                />



                <Text>Password</Text>

                <TextInput

                    style={styles.input}

                    onChangeText={setPassword}

                    value={password}

                    placeholder="Enter your password"

                    secureTextEntry

                />



                <Text>Confirm Password</Text>

                <TextInput

                    style={styles.input}

                    onChangeText={setConfirmPassword}

                    value={confirmPassword}

                    placeholder="Confirm your password"

                    secureTextEntry

                />



                <Text>Face Type</Text>

                <TextInput

                    style={styles.input}

                    onChangeText={setFaceType}

                    value={faceType}

                    placeholder="Enter your face type (e.g., type1, type2, type3)"

                />



                <Button title="Sign Up" onPress={handleSignUp} />

            </View>

        </SafeAreaView>

    );

}



const styles = StyleSheet.create({

    container: {

        flex: 1,

        backgroundColor: '#fff',

        alignItems: 'center',

        justifyContent: 'center',

    },

    form: {

        backgroundColor: 'lightblue',

        padding: 20,

        width: '80%',

        borderRadius: 10,

    },

    title: {

        fontSize: 24,

        fontWeight: 'bold',

        marginBottom: 20,

        textAlign: 'center',

    },

    input: {

        height: 40,

        borderColor: 'gray',

        borderWidth: 1,

        marginBottom: 10,

        paddingLeft: 10,

        borderRadius: 5,

    },

});