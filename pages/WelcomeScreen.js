import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = ({ route, navigation }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.greeting}>
        <View style={styles.hello}>
          <Text style={styles.txtIcon}>Hello {username ? username : ""}</Text>
          <Image
            style={styles.imgIcon}
            source={require("../assets/wave.png")}
          />
        </View>
        <View style={styles.greet}>
          <Text style={styles.subtext}>Have a good training section :D</Text>
        </View>
      </View>
      <View style={styles.history}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.imgIcon}
            source={require("../assets/historyIcon.png")}
          />
          <Text style={styles.txtIcon}>Training history</Text>
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={() => navigation.navigate("HistoryScreen")}
          >
            <Image
              style={styles.arrowIcon}
              source={require("../assets/rightArrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tracker}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.imgIcon}
            source={require("../assets/startExercise.png")}
          />
          <Text style={styles.txtIcon}>Start exercise</Text>
          <TouchableOpacity
            style={styles.arrowContainer}
            onPress={() => navigation.navigate("ChooseExScreen")}
          >
            <Image
              style={styles.arrowIcon}
              source={require("../assets/rightArrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    flex: 4,
  },
  imgIcon: {
    height: 55,
    width: 55,
  },
  arrowIcon: {
    height: 35,
    width: 35,
    margin: 5,
  },
  arrowContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
  },
  txtIcon: { fontSize: 22, padding: 20 },
  iconWrapper: {
    alignItems: "center",
    margin: 50,
    width: "100%",
    flexDirection: "column",
  },
  greeting: {
    flex: 2,
    width: "100%",
  },
  greet: {
    flex: 1,
    backgroundColor: "#8f59c6",
    alignItems: "center",
  },
  hello: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8f59c6",
    width: "100%",
  },
  history: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#6e32a0",
    width: "100%",
  },
  tracker: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8f59c6",
    width: "100%",
  },
});
export default WelcomeScreen;
