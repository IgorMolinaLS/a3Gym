import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ExerciseItem = ({ icon, title, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(`${navigateTo}`)}
    >
      <View>
        <View style={{ height: "5%" }} />
        <View style={styles.innerContainer}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    width: "90%",
  },
  innerContainer: {
    height: "auto",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderRadius: 30,
  },
  icon: { height: 70, width: 70 },
  text: { fontSize: 20, fontWeight: "400" },
});
