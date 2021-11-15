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
      regionMap: {},
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

    if (zoneName === "Parque del Perro") {
      let limit = Object.keys(data.zonesMarkersPP["Parque del Perro"]).length;
      console.log(limit);
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
      console.log(limit);
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
      console.log(limit);
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
