import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.tinyLogo}
        resizeMode="contain"
        source={{
          uri: 'https://www.archena.es/images/TuAytoportemas/medioambiente/recicladoaceitecocina1.gif',
        }}
      />
      <Text style={styles.textTitle}>OilGon</Text>
      <Text style={styles.textDescription}>
        Este es un aplicativo que le permite conocer los establecimientos comerciales
        registrados que cuentan con un bidón inteligente para la recolección de aceite usado.
      </Text>

      <Button
        title="Ingresar"
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
    justifyContent: "space-evenly",
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
  tinyLogo: {
    width: 222,
    height: 200,
  }
});
