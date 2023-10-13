import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./pages/LoginScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import ChooseExScreen from "./pages/ChooseExScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ChooseExScreen" component={ChooseExScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
