import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import FlastListScreen from "./FlatList";
import SectionListScreen from "./SectionListScreen";
import TouchableScreen from "./TouchableScreen";
import ModalDemo from "./ModalDemo";
import PullToRefresh from "./PullToRefresh";

export type RootStackParamList = {
    Home: undefined;
    FlatListDemo: undefined;
    SectionListDemo: undefined;
    TouchableDemo: undefined;
    ModalDemo: undefined;
    PullToRefreshDemo: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="FlatListDemo" component={FlastListScreen}/>
            <Stack.Screen name="SectionListDemo" component={SectionListScreen}/>
            <Stack.Screen name="TouchableDemo" component={TouchableScreen}/>
            <Stack.Screen name="ModalDemo" component={ModalDemo}/>
            <Stack.Screen name="PullToRefreshDemo" component={PullToRefresh}/>
        </Stack.Navigator>
    )
}

export default RootNavigation;