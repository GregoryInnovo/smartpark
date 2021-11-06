import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 1",
          description: "Estado: Ocupado",
        },
        {
          latlng: {
            latitude: 37.787745,
            longitude: -122.431995,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          title: "Slot 2",
          description: "Estado: Ocupado",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={this.state.region}
          minZoomLevel={17}
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
