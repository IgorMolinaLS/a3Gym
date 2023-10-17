import React from "react";
import { ExerciseItem } from "../components/ExerciseItem";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { ExerciseStyles } from "./ChooseExScreen";

const images = {
  DeadLift: require("../assets/exercises/legs/deadlift.png"),
  Squat: require("../assets/exercises/legs/squat.png"),
  Placeholder: require("../assets/placeholder.png"),
};

export const LegsExercises = () => {
  return (
    <SafeAreaView style={ExerciseStyles.safeContainer}>
      <ScrollView style={ExerciseStyles.scrollView}>
        <View style={ExerciseStyles.container}>
          <ExerciseItem
            title="Romanian Deadlift"
            icon={images.DeadLift}
            navigateTo="Camera"
          />
          <ExerciseItem
            title="Back Squat"
            icon={images.Squat}
            navigateTo="Camera"
          />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
          <ExerciseItem title="placeholder" icon={images.Placeholder} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
