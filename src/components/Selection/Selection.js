import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "./../../res/Colors";

class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mio_data: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await fetch(`http://192.168.1.10:3000/nodos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((responseJson) => {
        let element = [];
        let idsArray = [];
        let limit = responseJson.length;

        for (let index = 0; index < limit; index++) {
          let jsonData = {
            id: responseJson[index]["_id"],
            id_mio_node: responseJson[index]["id-mio-node"],
          };
          // console.log(idsArray.includes(responseJson[index]["id-mio-node"]));

          if (idsArray.includes(responseJson[index]["id-mio-node"])) {
            // the data is repeated
          } else {
            // the data is not repeated
            element.push(jsonData);
          }
          idsArray.push(responseJson[index]["id-mio-node"]);
        }

        // console.log(element);

        this.setState({ mio_data: element });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        id_mio_node: "E21-CAB-345",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        id_mio_node: "E21-CZB-435",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        id_mio_node: "E21-CEU-127",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd13da97f63",
        id_mio_node: "T31-CCA-712",
      },
      {
        id: "255356a0f-3da1-741f-bd96-145571e29d72",
        id_mio_node: "CO1-CFP-826",
      },
    ];

    const renderItem = ({ item }) => <Item idNode={item.id_mio_node} />;

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Selecciona la ruta que deseas</Text>
        <FlatList
          data={this.state.mio_data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const Item = ({ idNode }) => (
  <View style={styles.item}>
    <View style={styles.container_node}>
      <View>
        <Text style={styles.title}>Ruta</Text>
        <Text style={styles.bus_node}>{idNode}</Text>
      </View>

      <View>
        <Pressable
          onPress={() => {
            alert(idNode);
            // console.log(idNode);
          }}
          style={styles.btn_node}
        >
          <Text style={styles.btn_text}>Datos</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            alert(idNode);
            // console.log(idNode);
          }}
          style={styles.btn_node}
        >
          <Text style={styles.btn_text}>Alerta</Text>
        </Pressable>
      </View>
    </View>
  </View>
);
export default Selection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.white,
  },
  container_node: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: Colors.secondary,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  bus_node: {
    color: Colors.white,
    fontSize: 18,
  },
  btn_node: {
    backgroundColor: Colors.primary,
    margin: 6,
  },
  btn_text: {
    color: Colors.white,
    fontWeight: "bold",
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 6,
    paddingBottom: 6,
  },
});
