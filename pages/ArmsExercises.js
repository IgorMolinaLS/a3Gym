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
            navigateTo=""
          />
          <ExerciseItem title="Triceps Extension" icon={images.Triceps} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
