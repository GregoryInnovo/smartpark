import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Colors from "../../res/Colors";

class Description extends React.Component {
  constructor() {
    super();
    this.state = {
      regionMap: {},
      markers: [],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.mioId,
    });
  }

  cambiarRegion = (val) => {
    this.setState({ regionMap: region[val] });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
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
});
