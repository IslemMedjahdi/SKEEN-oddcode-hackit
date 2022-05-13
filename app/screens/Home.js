import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import Footer from "../components/Footer";
import { auth } from "../core/firebaseConfig";
export default function Home({ navigation }) {
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
          Skin improvement with time
        </Text>
        <Image
          source={require("../../assets/chart.png")}
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
          <View
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
              source={require("../../assets/Lollipop.png")}
            />
            <Text style={{ fontFamily: "MontserratBold", color: "#C97C25" }}>
              {"Less\nSugar"}
            </Text>
          </View>
          <View
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
              source={require("../../assets/Carrot.png")}
            />
            <Text style={{ fontFamily: "MontserratBold", color: "#C97C25" }}>
              {"Eat\nCarrot"}
            </Text>
          </View>
          <View
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
              source={require("../../assets/Cheese.png")}
            />
            <Text style={{ fontFamily: "MontserratBold", color: "#2D1010" }}>
              {"Less\nCheese"}
            </Text>
          </View>
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
            android_ripple={{ color: "#ffffff60" }}
            style={{
              width: "100%",
              paddingVertical: 20,
              backgroundColor: "#C97C25AA",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 7,
            }}
          >
            <Text style={{ color: "white", fontFamily: "MontserratBold" }}>
              Sleep time
            </Text>
          </Pressable>
        </View>
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
