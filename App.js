import * as React from "react";
import { Button, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import DetailsScreen from "./pages/Details";
import CreatePost from "./pages/CreatePost";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: "3" }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ title: "Postar algo novo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
