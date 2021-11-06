import React from "react";
import Home from "./src/components/Home/Home";
import Map from "./src/components/Map/Map";
import Selection from "./src/components/Selection/Selection";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  verificarUsuario = () => {
    let URL = "https://foodhyapi.herokuapp.com/api/v1/products/7702354929657";

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Bienvenid@" }}
        />
        <Stack.Screen name="Menú" component={Selection} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
