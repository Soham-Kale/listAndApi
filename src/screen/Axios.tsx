import { StyleSheet, Text, View } from "react-native";

const Axios = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Axios</Text>
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
});

export default Axios;