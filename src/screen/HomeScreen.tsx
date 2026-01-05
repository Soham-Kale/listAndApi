import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootNavigation";

const topics = [
    {
        id: '1',
        title: "FlatList Demo",
        screen: "FlatListDemo"
    },
    {
        id: '2',
        title: "SectionList Demo",
        screen: "SectionListDemo"
    },
    {
        id: '3',
        title: "Touchable Demo",
        screen: "TouchableDemo"
    },
    {
        id: '4',
        title: "Modal Demo",
        screen: "ModalDemo"
    },
    {
        id: '5',
        title: "Pull to Refresh Demo",
        screen: "PullToRefreshDemo"
    },
]

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {

    return <View style={style.container}>
        <FlatList
            data={topics}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen as keyof RootStackParamList)}
                    style={style.topicButton}
                >
                    <Text style={style.topicText}>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    topicButton: {
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#e0e0e0"
    },
    topicText: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default HomeScreen;