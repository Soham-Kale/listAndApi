import { StyleSheet, Text, View } from "react-native";


const INITIAL_DATA = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`,
}))

const PullToRefresh = () => {
    return <View style={styles.container}>
        <Text style={styles.header}>Large list with pull to refresh and infinite scroll</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default PullToRefresh;