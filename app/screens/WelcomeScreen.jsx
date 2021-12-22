import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

export default function WelcomeScreen(props) {
  const { children } = props;
  return (
    <ImageBackground
      source={require("../assets/WelcomeBackground.jpg")}
      style={styles.bckgrImg}
    >
      <Image style={styles.logo} source={require("../assets/logo.jpg")} />
      <View style={styles.btn}></View>
      <View style={styles.btnSec}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bckgrImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btn: {
    width: "100%",
    height: "10%",
    backgroundColor: "#f0a6ca",
  },
  btnSec: {
    width: "100%",
    height: "10%",
    backgroundColor: "#b8bedd",
  },
  logo: {
    width: "50%", 
    position: "absolute",
    top: 30,
  },
});
