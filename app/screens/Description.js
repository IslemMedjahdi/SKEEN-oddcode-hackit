import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function Description({ navigation }) {
  return (
    <View style={{ height: "100%", alignItems: "center" }}>
      <View
        style={{
          alignItems: "center",
          height: (40 * HEIGHT) / 100,
          overflow: "hidden",
          width: "100%",
          borderRadius: (50 * WIDTH) / 100,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <Image
          resizeMode="contain"
          style={{ position: "absolute", height: "100%" }}
          source={require("../../assets/desc.png")}
        />
        <Text style={{ fontFamily: "Cinzel", fontSize: 30, color: "white" }}>
          Description
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          height: (60 * HEIGHT) / 100,
        }}
      >
        <Text style={{ fontFamily: "Cinzel", fontSize: 30 }}>
          what’s SKEEN?
        </Text>
        <Text
          style={{
            width: "80%",
            fontFamily: "Montserrat",
            fontSize: 16,
            marginTop: 20,
            lineHeight: 22,
          }}
        >
          Skeen is a mobile application that allows you to detect your skin
          problems, and their potential causes and offers you personalized
          advice, all this in order to improve the quality of your skin.
        </Text>
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
            onPress={() => navigation.replace("Login")}
            android_ripple={{ color: "#ffffff80" }}
            style={{
              backgroundColor: "#1F1F1F",
              width: "80%",
              paddingVertical: 20,
              alignItems: "center",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "MontserratBold",
                fontSize: 17,
                marginRight: 10,
              }}
            >
              Continue
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
  );
}
