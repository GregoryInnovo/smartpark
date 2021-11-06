import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Home from './src/components/Home/Home';
import Map from './src/components/Map/Map';

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

  return <Home />;
}