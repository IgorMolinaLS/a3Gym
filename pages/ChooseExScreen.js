import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { ExerciseItem } from "../components/ExerciseItem";

const images = {
  arms: require("../assets/exercises/arms/strong.png"),
  legs: require("../assets/exercises/legs/leg.png"),
  back: require("../assets/exercises/back/back.png"),
  chest: require("../assets/exercises/chest/body.png"),
  abs: require("../assets/exercises/abs/abs.png"),
  shoulders: require("../assets/exercises/shoulders/shoulders.png"),
};

const ChooseExScreen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <ExerciseItem title="Arms" icon={images.arms} />
          <ExerciseItem title="Legs" icon={images.legs} />
          <ExerciseItem title="Back" icon={images.back} />
          <ExerciseItem title="Chest" icon={images.chest} />
          <ExerciseItem title="Abs" icon={images.abs} />
          <ExerciseItem title="Shoulders" icon={images.shoulders} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    height: 750,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#8974b6",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ChooseExScreen;
