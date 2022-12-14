import axios from "axios";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import WriteGood from "write-good";

export default function App() {
  function onPress() {
    axios.get("http://localhost:4000/").then((res) => {
      try {
        console.log(res);
      } catch (e) {
        console.warn(e);
      }
    });
    // const sugg = WriteGood('thiss is intresting, my mother are a cook also my dad is a engineer')
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} />
      <Button title="Press" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: Dimensions.get("window").width,
    borderWidth: 1,
    height: 40,
  },
});
