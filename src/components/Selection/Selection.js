import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";


const Separator = ({ navigation }) => (
    <View style={styles.separator} />
);

const Selection = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Escoge la zona en la que buscas parqueaderos</Text>
            <StatusBar style="auto" />

            <Separator />

            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/2/21/30-029_Parque_Perro_cali.JPG',
                }}
            />

            <Separator />

            <Text>Publica</Text>
            <Button
                title="Parque del Perro"
                onPress={() => navigation.navigate('Map')}
            />
        </View>
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
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
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
