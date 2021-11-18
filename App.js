import React from "react";
import Home from "./src/components/Home/Home";
import Data from "./src/components/Data/Data";
import Selection from "./src/components/Selection/Selection";
//import Colors from "./src/res/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  verificarUsuario = () => {
    let URL = "localhost:3000/nodos";

    fetch(URL)
      .then(async (response) => response.json())
      .then((res) => {
        console.log(res)
        // if() {
        // } else {
        // }
      });
  };

  /*const settings = {
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };*/

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        //options={settings}
          name="Home"
          component={Home}
          options={{ title: "Bidones Inteligentes" }}
        />
        <Stack.Screen name="Menú" component={Selection} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
