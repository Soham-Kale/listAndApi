import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ModalDemo = () => {

    const [showModal, setShowModal] = useState(false);

    return <View style={styles.container}>
        <Text style={styles.header}>Modal Demo</Text>

        <TouchableOpacity 
            onPress={() => setShowModal(!showModal)} 
            style={styles.btn}>
            <Text style={styles.btnText}>Show</Text>
        </TouchableOpacity>

        <Modal
            animationType="slide"
            visible={showModal}
            transparent={true}
            onRequestClose={() => setShowModal(false)}
        >
            <View style={styles.centerView}>
                <View style={styles.modalView}>
                    <Text>Modal Component</Text>

                    <TouchableOpacity 
                        onPress={() => setShowModal(false)} 
                        style={styles.btn}>
                        <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
}

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
    },
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
        backgroundColor: "#fff",
        padding: 35,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})


export default ModalDemo;