import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/homeScreen";
import CustomTabBar from "../components/common/customTabBar";

const Tab = createBottomTabNavigator();

export default function MainTabsNavigator(){
    return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} activeColor="#ff5722" />} 
    screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="Home" component={HomeScreen}/>
    </Tab.Navigator>
)}