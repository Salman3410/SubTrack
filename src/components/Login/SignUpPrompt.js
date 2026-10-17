import { Text, View, StyleSheet} from "react-native";

export default function SignUpPrompt({navigation, label1, label2}){
    return (
        <View style={styles.container}>
            <Text style={styles.prompt}>
                {label1}{" "}
                <Text style={styles.click} onPress={navigation}>{label2}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center",
        padding: 16,
    },
    prompt: {
        fontSize: 16,
        color: "#333"
    },
    click: {
        color: "#635BFF",
        fontWeight: "600"
    },
})