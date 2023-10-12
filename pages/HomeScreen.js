import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ route, navigation }) {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="CreatePost"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}
