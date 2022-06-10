import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Text>Hello there</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
