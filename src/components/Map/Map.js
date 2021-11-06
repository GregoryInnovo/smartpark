import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

const Map = () => {

  return (
    <View style={styles.container}>
      <Text>Map screen</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // map styles
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  containerMap: {
    height: 560,
    width: "100%",
    // backgroundColor: 'tomato'
  },
  map: {
    flex: 1,
  },
});
