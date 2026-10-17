import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function LoginButton({title, navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={navigation}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    button: {
        backgroundColor:"#635BFF",
        paddingVertical:14,
        alignItems:"center",
        borderRadius:10
    },
    text: {
        color:"#ffffff",
        fontSize: 15,
    },
})