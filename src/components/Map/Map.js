import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import data from "../../res/data";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 3.435899466564378,
        longitude: -76.5453948911183,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          latlng: {
            latitude: 3.435453687712306,
            longitude: -76.54564407064639,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 1",
          description: "Estado: Ocupado",
        },
        {
          latlng: {
            latitude: 3.4357573341993723,
            longitude: -76.54601298579186,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 2",
          description: "Estado: Ocupado",
        },
        {
          latlng: {
            latitude: 3.4360932833916444,
            longitude: -76.5458705974901,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 3",
          description: "Estado: Disponible",
        },
        {
          latlng: {
            latitude: 3.4356539651933384,
            longitude: -76.54504862865721,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 4",
          description: "Estado: Disponible",
        },
        {
          latlng: {
            latitude: 3.4362224945879447,
            longitude: -76.54511658671034,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 5",
          description: "Estado: Disponible",
        },
      ],
      markersssss: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.zoneName,
    });
    let { zoneName } = this.props.route.params;
    if (zoneName === "Parque del Perro") {
      // console.log(Object.keys(data["Parque del Perro"]).length)
      // Alert.alert("Parque del Perro")

      let iterator = data["Parque del Perro"].values();
      let limit = Object.keys(data["Parque del Perro"]).length;
      let element = []
      for (let index = 0; index < limit; index++) {
        element.push(data["Parque del Perro"][index]);
        console.log(element);
        // console.log("------------------");
      }
      this.setState({
        markersssss: element,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={this.state.region}
          minZoomLevel={17}
        >
          {this.state.markersssss.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))}
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

// const [mapRegion, setmapRegion] = React.useState({
//   latitude: 37.78825,
//   longitude: -122.4324,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421,
// });
