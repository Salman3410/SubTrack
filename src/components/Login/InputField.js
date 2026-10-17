import { Text, TextInput, View, StyleSheet } from "react-native";

export default function InputField({placeholder, secureTextEntry, title, value, onChange}){
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChange={onChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        width:"100%"
    },
    label: {
        fontSize:14,
        fontWeight:"600",
        color:"#333",
        marginBottom:8
    },
    input: {
        height:48,
        borderWidth:1,
        backgroundColor:"#f5f5f5",
        borderColor:"#e0e0e0",
        borderRadius:8,
        paddingHorizontal:16,
        fontSize:16
    },
})