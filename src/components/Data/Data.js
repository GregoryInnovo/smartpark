const React = require('react');
import { render } from "react-dom";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ScrollView,
} from "react-native";

class Data extends React.Component {


    constructor() {
        super();
        this.state = {
            id_bid: 0,
            loc: "Err",
            temp: "Err",
            nivel: "Err",
            alertaTemp: "Err",
            fecha: "Err",
        };
    }

    componentDidMount() {
        let idBidon = this.props.route.params.idNodo;
        this.setState({ id_bid: idBidon })
        console.log(idBidon);

        let INFO = this.props.route.params.location;

        this.setState({ loc: INFO })

        this.getData(idBidon)
    }

    getData = async (id) => {
        let URL = `http://192.168.20.24:3000/nodos/${id}`;
    
        fetch(URL)
          .then(async (response) => await response.json())
          .then((responseJson) => {
            console.log(responseJson)
            let element = [];
            let idsArray = [];
            console.log("-----")
            console.log(responseJson[0]["Nodo"]);
            console.log(responseJson[0]["Temperatura"]);
            this.setState({temp : responseJson[0]["Temperatura"]})
            console.log(responseJson[0]["_id"]);
            console.log(responseJson[0]["alertaNivel"]);
            this.setState({nivel : responseJson[0]["alertaNivel"]})
            console.log(responseJson[0]["alertaTemperatura"]);
            this.setState({alertaTemp : responseJson[0]["alertaTemperatura"]})
            console.log(responseJson[0]["fechaHora"]);
            this.setState({fecha : responseJson[0]["fechaHora"]})
            // for (let index = 0; index < limit; index++) {
    

            //   let jsonData = {
            //     id: responseJson[index]["_id"],
            //     idNodo: responseJson[index]["Nodo"],
            //     nombreEstablecimiento: establecimientos,
            //   };
            //   // console.log(idsArray.includes(responseJson[index]["id-mio-node"]));
    
            //   if (idsArray.includes(responseJson[index]["Nodo"])) {
            //     // the data is repeated
            //     // console.log("no push");
            //   } else {
            //     // the data is not repeated
            //     // console.log("push");
            //     element.push(jsonData);
            //   }
            //   idsArray.push(responseJson[index]["Nodo"]);
            // }
            // console.log(element)
            // this.setState({ bid_data: element })
    
          });
    
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.loc}</Text>
                <Text>Nodo: {this.state.id_bid}</Text>
                
                <Text>Temperatura: {this.state.temp}</Text>
                <Text>Alerta de nivel: {this.state.nivel}</Text>
                <Text>Alerta de temperatura: {this.state.alertaTemp}</Text>
                <Text>Fecha: {this.state.fecha}</Text>
            </View>
        )

    }
}

export default Data;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})