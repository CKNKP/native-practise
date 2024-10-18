import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://miki.a2gakhir.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

         

            if (response.ok) {
                Alert.alert('Success', 'Login successful!');
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
                <Text style={styles.text}>Login</Text>
                <Text>Email</Text>
                <TextInput 
                    style={styles.textInput}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Enter your email"
                />
                <Text>Password</Text>
                <TextInput 
                    style={styles.textInput}
                    secureTextEntry
                    autoComplete="off"
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Enter your password"
                />
                <Button title="Login" onPress={handleLogin} />
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
        backgroundColor: 'lightpink',
        padding: 20,
        width: '80%',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textInput: {
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
        marginBottom: 10,
    }
});