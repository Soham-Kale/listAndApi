import React from "react";
import { SectionList, Text, View } from "react-native";

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
        <View>
            <Text>{item}</Text>
        </View>
    )

    const handleRenderSectionHeader = ({
        section: { title },
    }: {
        section: { title: string };
    }) => (
        <View>
            <Text>{title}</Text>
        </View>
    )

    return <View>
        <Text>Section List Screen</Text>
        <SectionList
            renderSectionHeader={handleRenderSectionHeader}
            sections={SECTION_DATA}
            renderItem={handleRenderItems}
            keyExtractor={(item, index) => item + index}
        />
    </View>
}

export default SectionListScreen;