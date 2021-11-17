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
        <Separator />
        <Text>Zonas de recolección</Text>
        <StatusBar style="auto" />

        <Separator />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/2/21/30-029_Parque_Perro_cali.JPG",
          }}
        />

        <Separator />

      
        <Button
          title="Establecimientos Carrera 66"
          onPress={() => navigation.navigate("Map", {zoneName: "Establecimientos Carrera 66"})}
        />

        <Separator />

        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://i.pinimg.com/originals/42/f4/fa/42f4fa61bf46e2367eec2db468ce8445.jpg",
          }}
        />

        <Separator />

     
        <Button
          title="Establecimientos Calle 16"
          onPress={() => navigation.navigate("Map", {zoneName: "Establecimientos Calle 16"})}
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
