import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Colors from "./../../res/Colors";

const host_name = "http://192.168.1.10";
const host_amazon_name = "ec2-54-90-171-212.compute-1.amazonaws.com";
const HOST_URL = `${host_name}:3000`;

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
    // Active activity indicator
    this.setState({
      loading: true,
    });

    await fetch(`${HOST_URL}/nodos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => await res.json())
      .then((responseJson) => {
        let element = [];
        let idsArray = [];
        let limit = responseJson.length;
        // console.log("-------------");
        for (let index = 0; index < limit; index++) {
          let jsonData = {
            id: responseJson[index]["id"],
            id_mio_node: responseJson[index]["id_mio_node"],
          };
          // console.log(idsArray.includes(responseJson[index]["id_mio_node"]));

          if (idsArray.includes(responseJson[index]["id_mio_node"])) {
            // the data is repeated
            // console.log("no push");
          } else {
            // the data is not repeated
            // console.log("push");
            element.push(jsonData);
          }
          idsArray.push(responseJson[index]["id_mio_node"]);
        }

        // console.log(element);

        this.setState({ mio_data: element });

        // Remove activity indicator
        this.setState({
          loading: false,
        });
      })
      .catch(function (error) {
        console.log("NOT CONECCTION", error);
        // setTimeout(() => {
        //   this.props.navigation.goBack();
        // }, 2000);
      });
  };

  render() {
    const renderItem = ({ item }) => (
      <Item idNode={item.id_mio_node} nav={this.props} />
    );

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Selecciona la ruta que deseas</Text>
        <FlatList
          data={this.state.mio_data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        {this.state.loading ? (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#0000ff"
          />
        ) : null}
      </View>
    );
  }
}

const Item = ({ idNode, nav }) => (
  <View style={styles.item}>
    <View style={styles.container_node}>
      <View>
        <Text style={styles.title}>Ruta</Text>
        <Text style={styles.bus_node}>{idNode}</Text>
      </View>

      <View>
        <Pressable
          onPress={() =>
            nav.navigation.navigate("Description", {
              mioId: idNode,
              information: "data",
            })
          }
          style={styles.btn_node}
        >
          <Text style={styles.btn_text}>Datos</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            nav.navigation.navigate("Description", {
              mioId: idNode,
              information: "alert",
            })
          }
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
  loader: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
    opacity: 0.5,
    position: "absolute",
  },
});
