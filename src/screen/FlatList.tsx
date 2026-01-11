import { FlatList, StyleSheet, Switch, Text, View } from "react-native"
import { useTheme } from "../context/ThemeContext"

// data from api
const FLAST_DATA = Array.from({length: 50}, (_, index) => ({
    id: index.toString(),
    title: `Item ${index + 1}`
}))

const FlastListScreen: React.FC = () => {

    const { theme, toggleTheme } = useTheme();

    const isDarkMode = theme === 'dark';

    const handleRenderItem = ({item}: {item: {id: string, title: string}}) => (
        <View style={styles.item}>
            <Text style={{
                color: isDarkMode ? "#ffffff" : "#000000"
            }}>{item.title}</Text>
        </View>
    )

    return <View style={[styles.container, {
        backgroundColor: isDarkMode ? "#000000" : "#ffffff"
    }]}>
        <Text style={[styles.header, {
            color: isDarkMode ? "#ffffff" : "#000000"
        }]}>FlatList Example</Text>

        <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode?  "#f5dd4b" : "#f4f3f4"}
            trackColor={{false: "#767577", true: "#81b0ff"}}
        />

        <FlatList
            ListHeaderComponent={
                <Text style={styles.flatListHeader}>FlatList Header</Text>
            }
            ListFooterComponent={
                <Text style={styles.flatListFooter}>FlatList Footer</Text>
            }
            data={FLAST_DATA}
            renderItem={handleRenderItem}
            keyExtractor={item => item.id}
        />
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
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    flatListHeader: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    flatListFooter: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
    }
})

export default FlastListScreen;