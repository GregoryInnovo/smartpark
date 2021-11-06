import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  verificarUsuario = () => {
    let URL = "https://foodhyapi.herokuapp.com/api/v1/products/7702354929657"

    fetch(URL)
      .then(async (response) => response.json())
      .then((res) => {
      /**
       * Logica si el usuario y contrseña es correcta
       * 
       */

        // if() {

        // } else {

        // }
      });
  };

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
      <Button title="Press me" onPress={() => Alert.alert('¡Presionaste el botón!')} />
    </View>
  );
}

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
});
