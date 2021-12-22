import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const icon = require("./assets/favicon.png");
  const photoURI = "https://picsum.photos/200/300";
  return <View style={styles.container}>
  <WelcomeScreen>
  </WelcomeScreen>
  </View>;
}

const styles = StyleSheet.create({
  container: {
 backgroundColor:'#fff',
 flex:1,
  },
});
