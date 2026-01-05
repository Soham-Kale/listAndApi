import { StyleSheet, Text, View } from "react-native";


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