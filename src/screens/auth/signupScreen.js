import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Login/header";
import InputField from "../../components/Login/InputField";
import LoginButton from "../../components/Login/LoginButton";
import SignUpPrompt from "../../components/Login/SignUpPrompt";

export default function SignupScreen({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Header/>
            <InputField title={"Email"} placeholder={"Email"} value={email} onChange={setEmail}/>
            <InputField title={"Password"} placeholder={"Password"} secureTextEntry={true} value={password} onChange={password}/>
            <InputField title={"Confirm Password"} placeholder={"Password"} secureTextEntry={true} value={password} onChange={setPassword}/>
            <LoginButton title={"Register"} navigation={() => navigation.navigate("Login")}/>
            <SignUpPrompt navigation={() => navigation.goBack()} label1={"Already have an account?"} label2={"Login"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:20
    }
})