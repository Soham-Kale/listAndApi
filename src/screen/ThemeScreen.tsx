import { StyleSheet, Text, View } from "react-native"

const ThemeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Theme Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 15
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default ThemeScreen;