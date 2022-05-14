import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";

export default function Footer({ navigation, index }) {
  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        padding: 10,
        height: (10 * Dimensions.get("window").height) / 100,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Home")}
          android_ripple={{ color: "#ffffff" }}
          style={{
            backgroundColor: index === 0 ? "#F0F0F0" : "white",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
            source={require("../../assets/Vector3.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Camera")}
          android_ripple={{ color: "#ffffff" }}
          style={{
            backgroundColor: index === 1 ? "#F0F0F0" : "white",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
            source={require("../../assets/Vector.png")}
          />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Results")}
          android_ripple={{ color: "#ffffff" }}
          style={{
            backgroundColor: index === 2 ? "#F0F0F0" : "white",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 30, height: 30, opacity: 0.4 }}
            source={require("../../assets/Vector1.png")}
          />
        </Pressable>
        <Pressable
          android_ripple={{ color: "#ffffff" }}
          style={{
            backgroundColor: index === 3 ? "#F0F0F0" : "white",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
            source={require("../../assets/Vector2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}
