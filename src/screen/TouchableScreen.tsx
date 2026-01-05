import { useState } from "react"
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"

const TouchableScreen = () => {
    const [count, setCount] = useState(0);

    return <View style={styles.container}>
        <Text style={styles.header}>Touchable Screen</Text>

        <TouchableWithoutFeedback onPress={() => setCount(count+ 1)}>
            <View style={styles.btn}>
                <Text style={styles.btnText}> TouchableWithFeedback </Text>
            </View>
        </TouchableWithoutFeedback>

        <Pressable
            style={({ pressed }) => [
                styles.btn,
                {
                    backgroundColor: pressed ? "#d3e90fff" : "#e63e14ff"
                },
            ]}
        >
            {
                ({pressed}) => <Text style={
                    [styles.btnText, { color: pressed ? "white" : "black" }]
                }> {pressed ? "Pressed Now": "Pressable"} </Text>
            }
        </Pressable>


    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    btn: {
        padding: 10,
        backgroundColor: "#17ca20",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 5,
    },
    btnText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    }
});

export default TouchableScreen;