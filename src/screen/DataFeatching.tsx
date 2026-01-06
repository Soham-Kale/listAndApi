import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

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

    console.log(data);

    const handleRenderItem = ({item}: {item: Post}) => (
        <View style={styles.items}>
            <Text>{item.title}</Text>
        </View>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Data Featching</Text>

            <FlatList
                data={data}
                renderItem={handleRenderItem}
                keyExtractor={item => item.id.toString()}
            />
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
        borderBottomColor: '#ccc',
    }
});

export default DataFeatching;