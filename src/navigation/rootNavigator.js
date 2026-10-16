import { useState } from "react";
import AuthNavigator from "./authNavigator";
import { NavigationContainer} from "@react-navigation/native";
import MainTabsNavigator from "./mainTabsNavigator";

export default function RootNavigator(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <NavigationContainer>
            {isLoggedIn ?  <MainTabsNavigator/> : <AuthNavigator/> }
        </NavigationContainer>
)}