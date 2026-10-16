import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SubTrack</Text>
      <Text style={styles.headerText}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Manage your subscriptions in one place.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  appName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#635BFF",
    marginBottom: 24,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1C1C28",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#777789",
    lineHeight: 22,
  },
});