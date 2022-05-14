import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View, Image } from "react-native";
import { auth } from "../core/firebaseConfig";
import * as WebBrowser from "expo-web-browser";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function SelectWearable({ navigation }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState({});
  const selectHandler = async () => {
    console.log(session.url);
    await WebBrowser.openBrowserAsync(session.url);
    navigation.replace("Home");
  };
  const getSessionId = async () => {
    const url = "https://api.tryterra.co/v2/auth/generateWidgetSession";
    const headers = {
      "dev-id": "oddcode-ocz9LcqJLh",
      "x-api-key":
        "6bdfa45d4aa00298914fdfd8b08d3d6ad742343e8f5fc8f34bf4fcd48a173dc7",
      Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
      "Content-Type": "application/json",
    };
    const body = {
      reference_id: user.uid,
      providers: [
        "FITBIT",
        "OURA",
        "TRAININGPEAKS",
        "WITHINGS",
        "SUUNTO",
        "PELOTON",
        "ZWIFT",
        "GARMIN",
        "EIGHT",
        "WAHOO",
        "GOOGLE",
        "POLAR",
        "FREESTYLELIBRE",
        "TEMPO",
        "IFIT",
        "CONCEPT2",
        "FATSECRET",
        "CRONOMETER",
        "MYFITNESSPAL",
        "NUTRACHECK",
        "UNDERARMOUR",
      ].join(","),
      language: "EN",
    };
    try {
      const result = await fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify(body),
      });
      const res = await result.json();
      console.log(res);
      setSession(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user) {
      getSessionId();
    }
  }, [user]);
  useEffect(() => {
    if (auth) {
      const unsub = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          navigation.replace("Login");
        }
      });
      return () => unsub();
    }
  }, [auth]);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: (20 * HEIGHT) / 100,
          alignItems: "center",
          backgroundColor: "#2D1010",
          borderRadius: (45 * WIDTH) / 100,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: "Cinzel", fontSize: 25, color: "white" }}>
          Select A Wearable
        </Text>
      </View>
      <View
        style={{
          height: (80 * HEIGHT) / 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              alignItems: "flex-end",
              fontFamily: "Montserrat",
              marginRight: 10,
            }}
          >
            Powered By
          </Text>
          <Image
            resizeMode="contain"
            style={{ width: "35%" }}
            source={require("../../assets/terralogo.png")}
          />
        </View>
        <Pressable
          android_ripple={{ color: "#ffffff50" }}
          onPress={selectHandler}
          style={{
            padding: 20,
            backgroundColor: "#1F1F1F",
            width: "80%",
            alignItems: "center",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              color: "white",
              fontFamily: "MontserratBold",
            }}
          >
            Select wearable
          </Text>
        </Pressable>
        <Image
          resizeMode="contain"
          style={{ width: "95%", height: "50%" }}
          source={require("../../assets/dashboard.png")}
        />
      </View>
    </View>
  );
}
