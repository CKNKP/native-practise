import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from "react-native";
import { useState } from "react";

export default function Form() {
    const [title, setTitle] = useState('');
    const [posting, setPosting] = useState(false);
    const [error, setError] = useState('');

    const add = async () => {
        setPosting(true);
        setError('');
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    title: title
                })
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await res.json();
            console.log(json); 

            setTitle('');
        } catch (error) {
            setError('Failed to post. Please try again.');
        } finally {
            setPosting(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: "center" }}>Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter title"
                onChangeText={setTitle}
                value={title}
            />
            <Button title="Add Title" onPress={add} disabled={posting} />
            {posting && <ActivityIndicator size="small" color="#0000ff" />}
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        width: '80%',
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});
