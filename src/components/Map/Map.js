import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";
import data from "../../res/data";
import region from "../../res/region";

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
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.zoneName,
    });

    /**
     * Set markers depends of the zone
     */

    let { zoneName } = this.props.route.params;

    if (zoneName === "Establecimientos Carrera 66") {
      let limit = Object.keys(data.zonesMarkersPP["Establecimientos Carrera 66"]).length;
      console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersPP["Establecimientos Carrera 66"][index]);
        // console.log(data.zonesMarkersPP["Parque del Perro"][index]);
        // console.log("------------------");
      }
      this.setState({
        markers: element,
      });

      this.cambiarRegion(0);
    } else if (zoneName === "Establecimientos Calle 16") {
      let limit = Object.keys(data.zonesMarkersT["Establecimientos Calle 16"]).length;
      console.log(limit);
      let element = [];
      for (let index = 0; index < limit; index++) {
        element.push(data.zonesMarkersT["Establecimientos Calle 16"][index]);
        // console.log(data.zonesMarkersT["Tequendama"][index]);
        // console.log("------------------");
      }
      this.setState({
        markers: element,
      });

      this.cambiarRegion(1);
    } 
  }

  cambiarRegion = (val) => {
    this.setState({ regionMap: region[val] });
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
