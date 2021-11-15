import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../../res/Colors";

const HOST_URL = "http://192.168.1.10:3000";

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      regionMap: {},
      markers: [],
    };
  }

  componentDidMount() {
    let MIO_ID = this.props.route.params.mioId;
    this.props.navigation.setOptions({
      title: MIO_ID,
    });

    // the last element from the db
    this.getASpecificElement(MIO_ID);
  }

  getASpecificElement = async (idMio) => {
    await fetch(`${HOST_URL}/nodos/${idMio}`, {
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
        console.log(responseJson[0]);
        // for (let index = 0; index < limit; index++) {
        //   let jsonData = {
        //     id: responseJson[index]["_id"],
        //     id_mio_node: responseJson[index]["id-mio-node"],
        //   };
        //   // console.log(idsArray.includes(responseJson[index]["id-mio-node"]));

        //   if (idsArray.includes(responseJson[index]["id-mio-node"])) {
        //     // the data is repeated
        //   } else {
        //     // the data is not repeated
        //     element.push(jsonData);
        //   }
        //   idsArray.push(responseJson[index]["id-mio-node"]);
        // }

        // console.log(element);

        // this.setState({ mio_data: element });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { information, mioId } = this.props.route.params;
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        {information == "data" ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Datos de la ruta</Text>
            <Text style={styles.infoMio}>{mioId}</Text>
            <View style={styles.relatedTopics}>
              <Text style={styles.relatedTitle}>Topic 1</Text>
              <Text style={styles.relatedTitle}>Topic 2</Text>
            </View>

            <Text style={styles.infoDescription}>{information}</Text>
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Alerta de la ruta</Text>
            <Text style={styles.infoMio}>{mioId}</Text>
            <View style={styles.relatedTopics}>
              <Text style={styles.relatedTitle}>Topic 1</Text>
              <Text style={styles.relatedTitle}>Topic 2</Text>
            </View>

            <Text style={styles.infoDescription}>{information}</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-around",
  },
  infoContainer: {
    backgroundColor: "white",
    maxHeight: 209,
    width: "90%",
    alignSelf: "center",
    flex: 1,
    borderRadius: 8,
    borderRadius: 25,
    borderColor: Colors.gray,
    borderWidth: 1,
    marginTop: 12,
    marginBottom: 12,
    padding: 30,
  },
  infoTitle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  infoMio: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    color: Colors.primary,
  },
  relatedTopics: {
    flexDirection: "row",
  },
  relatedTitle: {
    fontSize: 14,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    marginRight: 8,
  },
  infoDescription: {
    fontSize: 12,
    fontFamily: "sans-serif-condensed",
    marginTop: 12,
  },
});
