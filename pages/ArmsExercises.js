import React from "react";
import { ExerciseItem } from "../components/ExerciseItem";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { ExerciseStyles } from "./ChooseExScreen";

const images = {
  BarbellBiceps: require("../assets/exercises/arms/barbellbiceps.png"),
  Triceps: require("../assets/exercises/arms/triceps.png"),
  Placeholder: require("../assets/placeholder.png"),
};

export const ArmsExercises = () => {
  return (
    <SafeAreaView style={ExerciseStyles.safeContainer}>
      <ScrollView style={ExerciseStyles.scrollView}>
        <View style={ExerciseStyles.container}>
          <ExerciseItem
            title="Barbell Biceps Curl"
            icon={images.BarbellBiceps}
            navigateTo="Camera"
          />
          <ExerciseItem
            title="Triceps Extension"
            icon={images.Triceps}
            navigateTo="Camera"
          />
          <ExerciseItem
            title="placeholder"
            icon={images.Placeholder}
            navigateTo="Camera"
          />
          <ExerciseItem
            title="placeholder"
            icon={images.Placeholder}
            navigateTo="Camera"
          />
          <ExerciseItem
            title="placeholder"
            icon={images.Placeholder}
            navigateTo="Camera"
          />
          <ExerciseItem
            title="placeholder"
            icon={images.Placeholder}
            navigateTo="Camera"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
