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
      markers: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.zoneName,
    });
    let { zoneName } = this.props.route.params;
    // console.log(Object.keys(data.zonesMarkersPP["Parque del Perro"]).length)

    if (zoneName === "Parque del Perro") {
      // Alert.alert("Parque del Perro")

      let limit = Object.keys(data.zonesMarkersPP["Parque del Perro"]).length;
      console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersPP["Parque del Perro"][index]);
        console.log(data.zonesMarkersPP["Parque del Perro"][index]);
        console.log("------------------");
      }
      this.setState({
        markers: element,
      });
    } else if (zoneName === "Tequendama") {
      /**
       * Mafe code
       */


    } else if (zoneName === "Santa Helena") {
      /**
       * Sergio code
       */
      let limit = Object.keys(data.zonesMarkersSH["Santa Helena"]).length;
      console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersSH["Santa Helena"][index]);
        console.log(data.zonesMarkersSH["Santa Helena"][index]);
        console.log("------------------");
      }
      this.setState({
        markers: element
      });

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={this.state.region}
          // minZoomLevel={17}
          minZoomLevel={5}
        >
          {this.state.markers.map((marker, index) => (
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
