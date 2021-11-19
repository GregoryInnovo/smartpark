import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  LogBox,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Separator = () => <View style={styles.separator} />;

const URL_HOST = "http://192.168.1.10:3000";
const URL_AWS = "http://ec2-52-90-24-61.compute-1.amazonaws.com:3000";

// trae los parqueaderos

class Selection extends React.Component {
  constructor() {
    super();
    this.state = {
      parks: [],
      images: [
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/2/21/30-029_Parque_Perro_cali.JPG",
        },
        {
          url: "https://i.pinimg.com/originals/42/f4/fa/42f4fa61bf46e2367eec2db468ce8445.jpg",
        },
        {
          url: "https://lh3.googleusercontent.com/proxy/wO9mhm18uwdtg2NxT7fDs9pYlzZ1i1Hbq796jlP1_dFkfSkDZUX8EG5l3xEji9-AhtVAwQktllKwxxMtQtorCkFLXxfS2Z7-LUadfbOwX2vAJkGPq2yGtvZj7SBB5Ey1DmR-_Q",
        },
        {
          url: "https://lh3.googleusercontent.com/proxy/wO9mhm18uwdtg2NxT7fDs9pYlzZ1i1Hbq796jlP1_dFkfSkDZUX8EG5l3xEji9-AhtVAwQktllKwxxMtQtorCkFLXxfS2Z7-LUadfbOwX2vAJkGPq2yGtvZj7SBB5Ey1DmR-_Q",
        },
        {
          url: "https://lh3.googleusercontent.com/proxy/wO9mhm18uwdtg2NxT7fDs9pYlzZ1i1Hbq796jlP1_dFkfSkDZUX8EG5l3xEji9-AhtVAwQktllKwxxMtQtorCkFLXxfS2Z7-LUadfbOwX2vAJkGPq2yGtvZj7SBB5Ey1DmR-_Q",
        },
        {
          url: "https://lh3.googleusercontent.com/proxy/wO9mhm18uwdtg2NxT7fDs9pYlzZ1i1Hbq796jlP1_dFkfSkDZUX8EG5l3xEji9-AhtVAwQktllKwxxMtQtorCkFLXxfS2Z7-LUadfbOwX2vAJkGPq2yGtvZj7SBB5Ey1DmR-_Q",
        },
      ],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // realiza una promesa para traer el JSON
  fetchData = async () => {
    fetch(`${URL_AWS}/parqueaderos`)
      .then((response) => response.json())
      .then((resJson) => {
        let jsonData = [];

        let limit = resJson.length;

        for (let index = 0; index < limit; index++) {
          jsonData.push(resJson[index]);
        }

        this.setState({ parks: jsonData });

        console.log("parks", jsonData);
      })
      .catch((e) => console.log("err connection", e));
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.containerBg}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>
            Escoge la zona en la que buscas parqueaderos
          </Text>
          {this.state.parks.map((data, index) => {
            // console.log(index);
            // console.log(this.state.parks[index].nombre);
            return (
              <>
                <Separator />
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: this.state.images[index].url,
                  }}
                />

                <Separator />

                <Text style={styles.textType}>
                  {this.state.parks[index].tipo}
                </Text>
                <Button
                  title={this.state.parks[index].nombre}
                  onPress={() =>
                    navigation.navigate("Map", {
                      zoneName: this.state.parks[index].nombre,
                    })
                  }
                />
              </>
            );
          })}

          {/* <Text style={styles.textTitle}>
            Escoge la zona en la que buscas parqueaderos
          </Text>
          <StatusBar style="auto" />

          <Separator />

          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/2/21/30-029_Parque_Perro_cali.JPG",
            }}
          />

          <Separator />

          <Text style={styles.textType}>Pública</Text>
          <Button
            title="Parque del Perro"
            onPress={() =>
              navigation.navigate("Map", { zoneName: "Parque del Perro" })
            }
          />

          <Separator />

          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://i.pinimg.com/originals/42/f4/fa/42f4fa61bf46e2367eec2db468ce8445.jpg",
            }}
          />

          <Separator />

          <Text style={styles.textType}>Pública</Text>
          <Button
            title="Tequendama"
            onPress={() =>
              navigation.navigate("Map", { zoneName: "Tequendama" })
            }
          />

          <Separator />

          <Image
            style={styles.tinyLogo}
            source={{
              uri: "",
            }}
          />

          <Separator />

          <Text style={styles.textType}>Pública</Text>
          <Button
            title="Santa Helena"
            onPress={() =>
              navigation.navigate("Map", { zoneName: "Santa Helena" })
            }
          />

          <Separator /> */}
        </View>
      </ScrollView>
    );
  }
}

export default Selection;

const styles = StyleSheet.create({
  containerBg: {
    // backgroundColor: "#C4C4C4",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },
  textType: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
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
    width: 300,
    height: 300,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
