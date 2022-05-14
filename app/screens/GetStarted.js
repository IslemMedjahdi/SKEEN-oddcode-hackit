import React, { useEffect } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { StatusBar } from "react-native";
export default function GetStarted({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Description");
    }, 2500);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <ImageBackground
        source={require("../../assets/getstarted.jpg")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
            backgroundColor: "#1F1F1F40",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#E5E5E560",
              borderRadius: 200,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              alignItems: "center",
              height: "57%",
            }}
          >
            <View style={{ alignItems: "center", width: "99%" }}>
              <Image
                style={{ width: "100%" }}
                resizeMode="contain"
                source={require("../../assets/GetstartedText.png")}
              />
              <Text
                style={{
                  color: "#1F1F1F",
                  fontFamily: "Cinzel",
                  fontSize: 32,
                  transform: [{ translateY: -40 }],
                }}
              >
                SKEEN
              </Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                overflow: "hidden",
                marginVertical: 50,
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#000000", fontFamily: "Cinzel", fontSize: 22 }}
              >
                “skincare is healthcare”
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
