import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
  const [data,setData] = useState()
  function onPress() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        // Use the data from the server here
        setData(JSON.stringify(data))
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error(error);
      });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Load data" onPress={onPress} />
      <Text>{data}</Text>
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
