import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Nombre de usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Contraseña"
      />
      <Button
        title="Press me"
        onPress={() => navigation.navigate('Menú')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  // map styles
  /*   page: {
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
    }, */
});
