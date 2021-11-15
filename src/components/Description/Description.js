import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../../res/Colors";
import paradas from "../../res/paradas";

const HOST_URL = "http://192.168.1.10:3000";

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      regionMap: {},
      markers: [],
      ruta: "ERR",
      placa: "ERR",
      fecha: "ERR",
      hora: "ERR",
      vals: {},
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
        let jsonMIOInfo;
        let limit = Object.keys(paradas["op"]).length;
        console.log(paradas["op"][0]);

        // console.log(responseJson[0].variables[0].estacion);
        // console.log(responseJson[0].variables[0].pasajeros);

        // console.log("----");

        paradas["op"].map((item, index) => {
          // console.log("FINALLY?", item.nombreParada);

          // console.log(responseJson[0].variables[0].estacion);

          if (item.id === responseJson[0].variables[0].estacion) {
            jsonMIOInfo = {
              estacion: item.nombreParada,
              pasajeros: responseJson[0].variables[0].pasajeros,
            };
            // console.log("Estacion", item.nombreParada);
          }
        });

        // Separar Hora y Fecha
        let dateTime = responseJson[0].fechaHora;
        let dateTimeDiv = dateTime.split("T", 2);

        let dateData = dateTimeDiv[0];
        let timeData = dateTimeDiv[1];
        // console.log("the date was", dateData);
        // console.log("the time was", timeData);

        // set the date and time
        this.setState({ fecha: dateData });
        this.setState({ hora: timeData });
        this.setState({ vals: jsonMIOInfo });
      })
      .catch(function (error) {
        console.log(error);
      });

    this.separador();
  };

  separador = () => {
    let cadena = this.props.route.params.mioId;
    let cadenaDivida = cadena.split("-", 3);
    this.setState({ ruta: cadenaDivida[0] });
    this.setState({ placa: `${cadenaDivida[1]}-${cadenaDivida[2]}` });
  };

  render() {
    const { information, mioId } = this.props.route.params;
    const { ruta, placa, fecha, hora, vals } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        {information == "data" ? (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Datos de la ruta</Text>
            <Image
              style={styles.infoImg}
              resizeMode="contain"
              source={{
                uri: "https://www.metrocali.gov.co/wp/wp-content/uploads/elementor/thumbs/Bus-Electrico-blanco-y-negro-504x333-nzaya14tbigxckib4loizyhgc78d99t2ghhjeg3oug.jpg",
              }}
            />
            <View style={styles.relatedTopics}>
              <Text style={styles.relatedTitle}>Ruta:</Text>
              <Text style={styles.relatedTitleInfo}>{ruta}</Text>
            </View>
            <View style={styles.relatedTopics}>
              <Text style={styles.relatedTitle}>Placa:</Text>
              <Text style={styles.relatedTitleInfo}>{placa}</Text>
            </View>

            <Text style={styles.infoDescription}>
              El número total de pasajeros actualmente es de {vals.pasajeros}, y
              la última parada donde el MIO paso fue: {vals.estacion}. La última
              actualización de la ruta fue {fecha} en las horas {hora}.
            </Text>
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Alerta de la ruta</Text>
            <Image
              style={styles.infoImg}
              resizeMode="contain"
              source={{
                uri: "https://www.metrocali.gov.co/wp/wp-content/uploads/elementor/thumbs/Bus-Electrico-blanco-y-negro-504x333-nzaya14tbigxckib4loizyhgc78d99t2ghhjeg3oug.jpg",
              }}
            />
            <View style={styles.relatedTopics}>
              <Text style={styles.relatedTitle}>Ruta:</Text>
              <Text style={styles.relatedTitleInfo}>{ruta}</Text>
            </View>
            <View style={styles.relatedTopics}>
              <Text style={styles.relatedTitle}>Placa:</Text>
              <Text style={styles.relatedTitleInfo}>{placa}</Text>
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
    maxHeight: 400,
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
  infoImg: {
    width: "100%",
    height: 160,
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
  relatedTitleInfo: {
    fontSize: 14,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    marginRight: 8,
    color: Colors.primary,
  },
  infoDescription: {
    fontSize: 12,
    fontFamily: "sans-serif-condensed",
    marginTop: 12,
  },
});
