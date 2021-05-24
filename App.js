import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Covid from './Screen/Covid-19Status'
import HomeMedic from './Screen/HomeMedic'
import Hospital from './Screen/Hospital'
import  Prevension from './Screen/Prevention'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
const AppNAvigator = createMaterialBottomTabNavigator({
  Covid19Status: {
    screen: Covid,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./download-_1_.jpg")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  Prevension: {
    screen: Prevension,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./download.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  HomeMedic: {
    screen: HomeMedic,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./images.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
  Hospital: {
    screen: Hospital,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("./Hospital.png")}
          style={{ width: 30, height: 30 }}
        ></Image>
      ),
    },
  },
})
const AppContainer=createAppContainer(AppNAvigator)
const styles = StyleSheet.create({});
