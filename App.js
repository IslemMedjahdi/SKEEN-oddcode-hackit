import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

//screens
import GetStarted from "./app/screens/GetStarted";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import Description from "./app/screens/Description";
import SelectWearable from "./app/screens/SelectWearable";
import Home from "./app/screens/Home";
import Camera from "./app/screens/Camera";
import Results from "./app/screens/Results";
import { LogBox } from "react-native";

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  console.disableYellowBox = true;
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const fetchFont = () => {
    return Font.loadAsync({
      Cinzel: require("./assets/font/Cinzel-Bold.ttf"),
      Montserrat: require("./assets/font/Montserrat-Regular.ttf"),
      MontserratBold: require("./assets/font/Montserrat-Bold.ttf"),
    }).then(() => setfontLoaded(true));
  };
  useEffect(() => {
    if (!fontLoaded) {
      fetchFont();
    }
  }, []);

  if (!fontLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SelectWearable" component={SelectWearable} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
