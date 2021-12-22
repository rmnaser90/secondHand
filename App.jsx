import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";

export default function App() {
  const icon = require("./assets/favicon.png");
  const photoURI = "https://picsum.photos/200/300";
  return (
    <SafeAreaView style={styles.SafeView}>
      <Image source={icon} width={"50%"} />
      <Image source={{ uri: photoURI, width: 200, height: 300 }} />
      <Text>hello world</Text>
      <Button title="click me" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b8bedd",
  },
});
