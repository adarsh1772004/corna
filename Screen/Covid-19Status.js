import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Header } from "react-native-elements";
import { PieChart } from "react-native-chart-kit";
export default class Covid extends React.Component {
  constructor() {
    super();
    this.state = {
      Covid19Global: "",
      Countries: "",
    };
  }
  Covid19Global = async () => {
    var link = "https://api.covid19api.com/summary";
    return fetch(link)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          Covid19Global: responseJson.Global,
          Countries: responseJson.Countries,
        });
      });
  };
  componentDidMount = async() => {
    await  this.Covid19Global();
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../back.jpeg")}
          style={styles.backgroundImg}
        ></Image>
        <View style={styles.subContainer}>
          <Header
            backgroundColor="blue"
            centerComponent={{
              text: "Covid-19 Status",
              style: { fontWeight: "bold", fontSize: 22 },
            }}
          ></Header>
          <ScrollView horizontal>
            <View style={[styles.inputBox, { backgroundColor: "green" }]}>
              <Text>New Confirmed:{this.state.Covid19Global.NewConfirmed}</Text>
              <Text>
                Total Confirmed:{this.state.Covid19Global.TotalConfirmed}
              </Text>
            </View>
            <View style={[styles.inputBox, { backgroundColor: "red" }]}>
              <Text> New Deaths:{this.state.Covid19Global.NewDeaths}</Text>
              <Text> Total Deaths:{this.state.Covid19Global.TotalDeaths}</Text>
            </View>
            <View style={[styles.inputBox, { backgroundColor: "yellow" }]}>
              <Text>New Recovered:{this.state.Covid19Global.NewRecovered}</Text>
              <Text>
                Total Recovered:{this.state.Covid19Global.TotalRecovered}
              </Text>
            </View>
          </ScrollView>
          <PieChart
            data={[
              {
                name: "Recovered",
                population: this.state.Covid19Global.TotalRecovered,
                color: "green",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
              },
              {
                name: "Decreased",
                population: this.state.Covid19Global.TotalDeaths,
                color: "#F00",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
              },
            ]}
            width={Dimensions.get("window").width - 16}
            height={220}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            //for the absolute number remove if you want percentage
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  backgroundImg: {
    flex: 1,
    resizeMode: "cover",
  },
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputBox: {
    borderWidth: 2,
    width: 250,
    height: 80,
    marginTop: 250,

    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
