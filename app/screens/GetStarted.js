import React from "react";
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import { StatusBar } from "react-native";
export default function GetStarted({ navigation }) {
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
              backgroundColor: "rgba(31, 31, 31, 0.5)",
              borderRadius: 200,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              alignItems: "center",
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
                  color: "white",
                  fontFamily: "Cinzel",
                  fontSize: 32,
                  transform: [{ translateY: -40 }],
                }}
              >
                Carry
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
              <Pressable
                onPress={() => navigation.replace("Description")}
                android_ripple={{ color: "#ffffff80" }}
                style={{
                  backgroundColor: "#F4CBF0",
                  width: "80%",
                  paddingVertical: 20,
                  alignItems: "center",
                  borderRadius: 10,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#1F1F1F",
                    fontFamily: "MontserratBold",
                    fontSize: 17,
                    marginRight: 10,
                  }}
                >
                  Get Started
                </Text>
                <Image
                  resizeMode="contain"
                  style={{ width: 30 }}
                  source={require("../../assets/icon1.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
