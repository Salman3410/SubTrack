import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Login/header";
import InputField from "../../components/Login/InputField";
import LoginButton from "../../components/Login/LoginButton";
import ForgotPassword from "../../components/Login/ForgotPassword";
import SignUpPrompt from "../../components/Login/SignUpPrompt";

export default function LoginScreen({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
    <View style={styles.container}>
        <Header/>
        <InputField title={"Email"} placeholder={"Email"} value={email} onChange={setEmail}/>
        <InputField title={"Password"} placeholder={"Password"} secureTextEntry={true} value={password} onChange={setPassword}/>
        <ForgotPassword/>
        <LoginButton title={"Login"} navigation={() => navigation.navigate("Home")}/>
        <SignUpPrompt navigation={() => navigation.navigate("Register")} label1={"You don't have an account?"} label2={"Create one"}/>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:20
    }
})