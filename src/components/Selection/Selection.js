import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Separator = ({ navigation }) => <View style={styles.separator} />;

const Selection = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Escoge la zona en la que buscas parqueaderos</Text>
        <StatusBar style="auto" />

        <Separator />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/2/21/30-029_Parque_Perro_cali.JPG",
          }}
        />

        <Separator />

        <Text>Pública</Text>
        <Button
          title="Parque del Perro"
          onPress={() => navigation.navigate("Map", {zoneName: "Parque del Perro"})}
        />

        <Separator />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://i.pinimg.com/originals/42/f4/fa/42f4fa61bf46e2367eec2db468ce8445.jpg",
          }}
        />

        <Separator />

        <Text>Pública</Text>
        <Button
          title="Tequendama"
          onPress={() => navigation.navigate("Map", {zoneName: "Tequendama"})}
        />

        <Separator />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://lh3.googleusercontent.com/proxy/wO9mhm18uwdtg2NxT7fDs9pYlzZ1i1Hbq796jlP1_dFkfSkDZUX8EG5l3xEji9-AhtVAwQktllKwxxMtQtorCkFLXxfS2Z7-LUadfbOwX2vAJkGPq2yGtvZj7SBB5Ey1DmR-_Q",
          }}
        />

        <Separator />

        <Text>Pública</Text>
        <Button
          title="Santa Helena"
          onPress={() => navigation.navigate("Map", {zoneName: "Santa Helena"})}
        />

        <Separator />
      </View>
    </ScrollView>
  );
};

export default Selection;

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
  tinyLogo: {
    width: 100,
    height: 100,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
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
