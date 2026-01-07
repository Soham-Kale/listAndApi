import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";


interface Post {
    id: number;
    title: string;
}

// Services file -> import
// Axios instance -> baseURL, headers, interceptors

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// request
api.interceptors.request.use(config => {
    console.log("Request sent: ", config);
    return config;
})

// response
api.interceptors.response.use(response => {
    console.log("Response Received: ", response);
    return response;
})

const Axios = () => {
    const [data, setData] =  useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const featchPostdata = async () => {
        try {
            setLoading(true);
            const response = await api.get<Post[]>('/posts');

            if(response) {
                setData(response.data);
                setLoading(false);
            } else {
                setData([]);
                setLoading(false);
            }

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        featchPostdata();
    }, []);

    const handleRenderItem = ({item}: {item: Post}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Axios</Text>

            {
                loading ? (
                    <ActivityIndicator size={'large'} color={'#000fff'}/>
                ): (
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={handleRenderItem}
                    />
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#c8dd0dff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    }
});

export default Axios;