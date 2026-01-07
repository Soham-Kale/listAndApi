import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

interface Post {
    id: number;
    title: string;
}

const DataFeatching = () => {
    const [data, setData] =  useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const featchPostdata = async () => {
        try {
            setLoading(true);

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data : Post[] = await response.json();

            if(data) {
                setData(data);
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
        <View style={styles.items}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Data Featching</Text>

            {
                loading ? (
                    <ActivityIndicator size={'large'} color={'#000fff'} /> 
                ) : (
                    <FlatList
                        data={data}
                        renderItem={handleRenderItem}
                        keyExtractor={item => item.id.toString()}
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
    items: {
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

export default DataFeatching;