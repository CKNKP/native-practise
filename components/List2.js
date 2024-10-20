import { View, FlatList, Text} from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";


function List2() {


    const [data, setData] = useState([]);

    const fetch = async() => {
        try{
            const f = await axios.get("https://jsonplaceholder.typicode.com/comments")
            setData(f.data)
        }
        catch(error){
            console.log("Error fetching data", error)
        }
    }

    useEffect(()=>{
        fetch();
    }, [])

    
    return (
        <View>
            <FlatList
            data={data}
            renderItem={({item})=> {
                return(
                    <View>
                        <Text>{item.email}</Text>
                    </View>
                )
            }}
            ></FlatList>
        </View>
    );
}

export default List2;