import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import {Fontisto} from '@expo/vector-icons';
import { useState } from "react";

export default function ForgotPassword({navigation}){
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkBox} activeOpacity={0.8} onPress={() => setRememberMe(!rememberMe)}>
            <Fontisto name={rememberMe ? "checkbox-active" : "checkbox-passive"} size={10} color={rememberMe ? "#635BFF" : "#888"} />
            <Text style={styles.text}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={navigation}>
            <Text style={styles.label}>Forgot password?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%"
    },
    checkBox:{
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        color:"#888",
        marginLeft: 8,
        fontSize: 14,
        includeFontPadding: false,
        textAlignVertical:"center",
    },
    button: {
        paddingVertical:4,
    },
    label: {
        color:"#635BFF",
        fontSize: 14,
        fontWeight: "500",
    }
})