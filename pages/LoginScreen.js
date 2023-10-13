import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

export default function App({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.button}
        onPress={() =>
          password === "123"
            ? navigation.navigate("WelcomeScreen", {
                username,
              })
            : Alert.alert("Wrong pass", "Please try again")
        }
      >
        <Text style={styles.btnText}>LOGIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8974b6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "transparent",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  TextInput: {
    color: "#fff",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
    height: 50,
    paddingHorizontal: 32,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#69529b",
  },
});
