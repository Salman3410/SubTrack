import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/loginScreen";
import SignupScreen from "../screens/auth/signupScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={SignupScreen}/>
        </Stack.Navigator>
)}