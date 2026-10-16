import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/Login/header";

export default function LoginScreen(){
    return (
    <View style={styles.container}>
        <Header/>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})