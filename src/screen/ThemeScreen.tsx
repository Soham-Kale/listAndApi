import { StyleSheet, Switch, Text, View } from "react-native"
import { useTheme } from "../context/ThemeContext";

const ThemeScreen = () => {
    const {theme, toggleTheme} = useTheme();

    const isDarkMode = theme === 'dark';

    return (
        <View style={[styles.container, {
            backgroundColor: isDarkMode ? "#000000" : "#ffffff"
        }]}>
            <Text style={[styles.heading, {
                color: isDarkMode ? "#ffffff" : "#000000"
            }]}>Theme Screen</Text>

            <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{false: "#767577", true: "#81b0ff"}}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            />
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