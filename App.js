import React from "react";
import Home from "./src/components/Home/Home";
import Description from "./src/components/Description/Description";
import Selection from "./src/components/Selection/Selection";
import Colors from "./src/res/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  const settings = {
    headerStyle: {
      backgroundColor: Colors.secondary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={settings}
          name="Smart Trip MIO"
          component={Home}
        />
        <Stack.Screen options={settings} name="Rutas" component={Selection} />
        <Stack.Screen
          options={settings}
          name="Description"
          component={Description}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
