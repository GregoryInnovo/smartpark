import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textTitle}>Smart Park</Text>
      <Text style={styles.textDescription}>
        Bienvenid@ a Smart Park, en el siguiente botón irás al menú de selección
        para escoger que zonas deseas y saber la disponibilidad de un
        parqueadero.
      </Text>

      <Button
        title="Ir al menú de selección"
        onPress={() => navigation.navigate("Menú")}
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
  textTitle: {
    fontWeight: "bold",
    fontSize: 26,
  },
  textDescription: {
    fontSize: 15,
    textAlign: "justify",
    padding: 14,
  },
});
