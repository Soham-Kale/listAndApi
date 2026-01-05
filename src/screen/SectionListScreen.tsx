import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

const SECTION_DATA = [
    {
        title: 'men',
        data: ['Shirts', 'Jeans', 'Jackets', 'Shoes']
    },
    {
        title: 'women',
        data: ['Dresses', 'Tops', 'Skirts', 'Heels']
    },
    {
        title: 'women',
        data: ['Dresses', 'Tops', 'Skirts', 'Heels']
    },
]


const SectionListScreen: React.FC = () => {

    const handleRenderItems = ({item}: {item: string}) => (
        <View style={styles.item}>
            <Text>{item}</Text>
        </View>
    )

    const handleRenderSectionHeader = ({
        section: { title },
    }: {
        section: { title: string };
    }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    )

    return <View style={styles.conatiner}>
        <Text style={styles.header}>Section List Screen</Text>
        <SectionList
            renderSectionHeader={handleRenderSectionHeader}
            sections={SECTION_DATA}
            renderItem={handleRenderItems}
            keyExtractor={(item, index) => item + index}
        />
    </View>
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        padding: 15
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eeee',
    },
    sectionHeader: {
        backgroundColor: '#f0f0f0',
        padding: 5,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default SectionListScreen;