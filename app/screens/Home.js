import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import Footer from "../components/Footer";
import { auth, db } from "../core/firebaseConfig";
import * as Animatable from "react-native-animatable";
export default function Home({ navigation }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (auth) {
      const unsub = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          // getUser(currentUser.uid);
        } else {
          navigation.replace("Login");
        }
      });
      return () => unsub();
    }
  }, [auth]);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 30, fontFamily: "Cinzel", marginTop: 20 }}>
          Home
        </Text>
        <Text
          style={{ fontSize: 20, fontFamily: "MontserratBold", marginTop: 20 }}
        >
          {index === 0
            ? "Skin improvement with time"
            : "Sleep time improvement"}
        </Text>
        <Image
          source={
            index === 0
              ? require("../../assets/chart.png")
              : require("../../assets/Chart1.png")
          }
          style={{ margin: 15, borderRadius: 10, width: 370 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Animatable.View
            animation={"zoomIn"}
            style={{
              backgroundColor: "#C97C2520",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: "#C97C25",
              borderRadius: 10,
              opacity: 0.5,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              source={
                index === 0
                  ? require("../../assets/Lollipop.png")
                  : require("../../assets/milk.png")
              }
            />
            <Text style={{ fontFamily: "MontserratBold", color: "#C97C25" }}>
              {index === 0 ? "Less\nSugar" : "Drink\nMilk"}
            </Text>
          </Animatable.View>

          <Animatable.View
            animation={"zoomIn"}
            style={{
              backgroundColor: "#C97C2520",
              borderWidth: 1,
              borderColor: "#C97C25",
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              source={
                index === 0
                  ? require("../../assets/Peanuts.png")
                  : require("../../assets/Salad.png")
              }
            />
            <Text style={{ fontFamily: "MontserratBold", color: "#C97C25" }}>
              {index === 0 ? "Eat\nnuts    " : "Eat\nhealthy"}
            </Text>
          </Animatable.View>
          <Animatable.View
            animation={"zoomIn"}
            style={{
              backgroundColor: "#2D101010",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderWidth: 1,
              borderColor: "#2D1010",
              borderRadius: 10,
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              source={
                index === 0
                  ? require("../../assets/Ice.png")
                  : require("../../assets/gym.png")
              }
            />
            <Text style={{ fontFamily: "MontserratBold", color: "#2D1010" }}>
              {index === 0 ? "Drink\nWater" : "Practice\nregulary"}
            </Text>
          </Animatable.View>
        </View>
        <View
          style={{
            width: "70%",
            height: 1,
            backgroundColor: "#00000050",
            marginTop: 20,
          }}
        />
        <View style={{ width: "80%", marginTop: 20 }}>
          <Text style={{ fontFamily: "MontserratBold", color: "#C97C25DD" }}>
            Click for more infos
          </Text>
          <Pressable
            onPress={() => setIndex(index === 0 ? 1 : 0)}
            android_ripple={{ color: "#ffffff60" }}
            style={{
              width: "100%",
              paddingVertical: 20,
              backgroundColor: index === 0 ? "#C97C25AA" : "#CAA29F",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 7,
            }}
          >
            <Text style={{ color: "white", fontFamily: "MontserratBold" }}>
              {index === 0 ? "Sleep time" : "Skin improvement with time"}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            width: "70%",
            height: 1,
            backgroundColor: "#00000050",
            marginTop: 20,
          }}
        />
        <View style={{ width: "80%", marginTop: 20 }}>
          <Text style={{ fontFamily: "MontserratBold", color: "#CAA29F" }}>
            Click for more infos
          </Text>
          <Pressable
            android_ripple={{ color: "#ffffff60" }}
            style={{
              width: "100%",
              paddingVertical: 20,
              backgroundColor: "#CAA29F",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 7,
            }}
          >
            <Text style={{ color: "white", fontFamily: "MontserratBold" }}>
              Stress Level
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Footer navigation={navigation} index={0} />
      </View>
    </View>
  );
}
