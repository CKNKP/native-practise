import { FlatList, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function List() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json);
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()} 
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />} 
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
}
