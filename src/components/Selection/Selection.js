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

class Selection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bid_data: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let URL = "http://192.168.20.24:3000/nodos";

    fetch(URL)
      .then(async (response) => await response.json())
      .then((responseJson) => {
        // console.log(responseJson)
        let element = [];
        let idsArray = [];
        let limit = responseJson.length;
        console.log(limit);
        for (let index = 0; index < limit; index++) {

          let establecimientos;
          if (responseJson[index]["Nodo"] == 1) {
            establecimientos = "Establecimientos Carrera 66"
          } else if (responseJson[index]["Nodo"] == 2) {
            establecimientos = "Establecimientos Carrera 16"
          } else if (responseJson[index]["Nodo"] == 3) {
            establecimientos = "Establecimientos Carrera 54"
          }

          let jsonData = {
            id: responseJson[index]["_id"],
            idNodo: responseJson[index]["Nodo"],
            nombreEstablecimiento: establecimientos,
          };
          // console.log(idsArray.includes(responseJson[index]["id-mio-node"]));

          if (idsArray.includes(responseJson[index]["Nodo"])) {
            // the data is repeated
            // console.log("no push");
          } else {
            // the data is not repeated
            // console.log("push");
            element.push(jsonData);
          }
          idsArray.push(responseJson[index]["Nodo"]);
        }
        console.log(element)
        this.setState({ bid_data: element })

        /*const jsonData = (this.state.bid_data[0]["nombreEstablecimiento"]);
        console.log("-------------------------------------------")
        console.log("a", jsonData)*/
      });

  }
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Separator />
          <Text>Zonas de recolección</Text>
          <StatusBar style="auto" />

          <Separator />
          {

            this.state.bid_data.map((data, index) => {
              return (
                <>
                  <Text>
                    Nodo del bidón es: {index + 1}
                  </Text>

                  <Text>
                    {this.state.bid_data[index]["nombreEstablecimiento"]}
                  </Text>


                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/2/21/30-029_Parque_Perro_cali.JPG",
                    }}
                  />

                  <Separator />


                  <Button
                  style={{marginTop: 20}}
                    title={this.state.bid_data[index]["nombreEstablecimiento"]}
                    // onPress={() => navigation.navigate("Map", {zoneName: "Establecimientos Carrera 66"})}
                    onPress={() => navigation.navigate("Data", { idNodo: this.state.bid_data[index]["idNodo"] , location: this.state.bid_data[index]["nombreEstablecimiento"]})}
                  />
                </>
              )
            })
          }

        </View>
      </ScrollView>
    );
  }
};

// const Item = () => (

// )

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
