import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { auth } from "../core/firebaseConfig";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function SelectWearable({ navigation }) {
  const [user, setUser] = useState(null);
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
          backgroundColor: "#F4CBF0",
          borderRadius: (45 * WIDTH) / 100,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: "Cinzel", fontSize: 25, color: "#1F1F1F" }}>
          Select A Wearable
        </Text>
      </View>
      <View style={{ height: (80 * HEIGHT) / 100 }}>
        <Pressable></Pressable>
      </View>
    </View>
  );
}
