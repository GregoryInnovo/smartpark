import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import data from "../../res/data";
import region from "../../res/region";

const URL_HOST = "http://192.168.1.10:3000";
const URL_AWS = "http://ec2-52-90-24-61.compute-1.amazonaws.com:3000";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      regionMap: {
        latitude: 3.435899466564378,
        longitude: -76.5453948911183,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [],
      id_Calle: "Err",
      information: [
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
        {
          estado: 0,
          fechaHora: "2021-11-18T12:24:36-05:00",
          slot: 1,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.zoneName,
    });

    if (this.props.route.params.zoneName === "Parque del Perro") {
      console.log("Calle4A");
      this.setState({ id_Calle: "Calle4A" });
    } else if (this.props.route.params.zoneName === "Tequendama") {
      console.log("Calle4B");
      this.setState({ id_Calle: "Calle4B" });
    } else if (this.props.route.params.zoneName === "Santa Helena") {
      console.log("Calle4C");
      this.setState({ id_Calle: "Calle4C" });
    }
    setTimeout(() => this.getStateSlot(), 1000);

    /**
     * Set markers depends of the zone
     */
    let { zoneName } = this.props.route.params;

    if (zoneName === "Parque del Perro") {
      let limit = Object.keys(data.zonesMarkersPP["Parque del Perro"]).length;
      // console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersPP["Parque del Perro"][index]);
        // console.log(data.zonesMarkersPP["Parque del Perro"][index]);
        // console.log("------------------");
      }
      this.setState({
        markers: element,
      });

      this.cambiarRegion(0);
    } else if (zoneName === "Tequendama") {
      let limit = Object.keys(data.zonesMarkersT["Tequendama"]).length;
      // console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersT["Tequendama"][index]);
        // console.log(data.zonesMarkersT["Tequendama"][index]);
        // console.log("------------------");
      }
      this.setState({
        markers: element,
      });

      this.cambiarRegion(1);
    } else if (zoneName === "Santa Helena") {
      /**
       * Sergio code
       */
      let limit = Object.keys(data.zonesMarkersSH["Santa Helena"]).length;
      // console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersSH["Santa Helena"][index]);
        // console.log(data.zonesMarkersSH["Santa Helena"][index]);
        // console.log("------------------");
      }
      this.setState({
        markers: element,
      });

      this.cambiarRegion(2);
    }
  }

  cambiarRegion = (val) => {
    this.setState({ regionMap: region[val] });
  };

  getStateSlot = async () => {
    let id = this.state.id_Calle;
    fetch(`${URL_AWS}/data/zone/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let limit = responseJson.length;
        console.log("lenght", limit);
        let element = [];
        let idsArray = [];
        // console.log(limit);
        for (let index = 0; index < limit; index++) {
          // console.log("------------------");
          // console.log(responseJson[index]["slot"]);
          let jsonData = {
            slot: responseJson[index]["slot"],
            estado: responseJson[index]["estado"],
            fechaHora: responseJson[index]["fechaHora"],
          };
          // console.log(idsArray.includes(responseJson[index]["slot"]));

          if (idsArray.includes(responseJson[index]["slot"])) {
            // the data is repeated
            // console.log("no push");
          } else {
            // the data is not repeated
            // console.log("push");
            element.push(jsonData);
          }
          idsArray.push(responseJson[index]["slot"]);
        }
        console.log(".......");
        console.log("lenght filter", element.length);
        // console.log(element);
        this.setState({ information: element });

        // console.log("datas", this.state.information[0].estado);
      })
      .catch((e) => console.log("err connection", e));
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={this.state.regionMap}
          minZoomLevel={17}
          // minZoomLevel={5}
        >
          {this.state.markers.map((marker, index) => {
            console.log(this.state.information[index].slot);
            let titleSlot = this.state.information[index].slot;
            let stateSlot = this.state.information[index].estado;
            return (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={`Slot ${titleSlot}`}
                description={`Estado ${stateSlot}`}
              />
            );
          })}
        </MapView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
