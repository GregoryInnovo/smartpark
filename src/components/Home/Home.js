import React from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "./../../res/Colors";
import splashImage from "./../../assets/mio-splash.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={splashImage} style={styles.img_login} />
      <View style={styles.container_information}>
        <Text style={styles.textTitle}>Smart Trip MIO</Text>
        <Text style={styles.textDescription}>
          Bienvenid@ a Smart Trio MIO, en el cual podrás obtener la información
          de alguna ruta en particular que este transcurriendo, con el fin de
          saber: el identificar único del MIO, la parada actual, número de
          pasajeros en dicha ruta, la fecha y la hora. Da click en el siguiente
          botón para ver las rutas que estan transcurriendo.
        </Text>

        <Pressable
          style={styles.btn_login}
          onPress={() => navigation.navigate("Rutas")}
        >
          <Text style={styles.btn_login_text}>Ver rutas en circulación</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
  },
  container_information: {
    flex: 1,
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
    padding: 14,
    color: Colors.white,
  },
  textDescription: {
    fontSize: 15,
    textAlign: "justify",
    padding: 14,
    color: Colors.white,
  },
  img_login: {
    width: "100%",
    height: "30%",
  },
  btn_login: {
    padding: 14,
    backgroundColor: Colors.secondary,
  },
  btn_login_text: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});
