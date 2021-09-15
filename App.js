import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import MainStackNavigator from "./navigation/MainStackNavigator";
import { Colors } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MainStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    paddingTop: 30,
  },
});
