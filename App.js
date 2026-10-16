import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import RootNavigator from './src/navigation/rootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <RootNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
