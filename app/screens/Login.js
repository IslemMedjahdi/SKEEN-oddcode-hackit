import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, Text, Dimensions, TextInput, Pressable } from "react-native";
import { auth } from "../core/firebaseConfig";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const loginHandler = () => {
    setLoading(true);
    setError("");
    signInWithEmailAndPassword(auth, data.email.trim(), data.password)
      .then(() => {
        navigation.replace("SelectWearable");
      })
      .catch((e) => {
        setError(e.code);
      })
      .finally(() => setLoading(false));
  };
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: (35 * HEIGHT) / 100,
          backgroundColor: "#2D1010",
          borderRadius: (45 * WIDTH) / 100,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontFamily: "Cinzel", color: "#FEFEFE", fontSize: 20 }}>
          Welcome gorgeous creature
        </Text>
        <Text
          style={{
            width: "75%",
            fontFamily: "Montserrat",
            color: "#FEFEFE",
            fontSize: 16,
          }}
        >
          In order start this journey you need to your existing accountor create
          an new one.
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          height: (35 * HEIGHT) / 100,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center", width: "80%" }}>
          <Text
            style={{
              fontFamily: "Montserrat",
              width: "100%",
              color: "#1F1F1F",
            }}
          >
            Email
          </Text>
          <TextInput
            keyboardType="email-address"
            onChangeText={(text) => setData({ ...data, email: text })}
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              width: "100%",
              padding: 10,
              borderRadius: 10,
              borderColor: "#C97C25",
              marginTop: 7,
              color: "#1F1F1F",
              borderWidth: 1,
              borderColor: "#C97C25",
            }}
            placeholder="example@gmail.com"
          />
        </View>
        <View style={{ alignItems: "center", width: "80%", marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Montserrat",
              width: "100%",
              color: "#1F1F1F",
            }}
          >
            Password
          </Text>
          <TextInput
            onChangeText={(text) => setData({ ...data, password: text })}
            secureTextEntry
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              width: "100%",
              padding: 10,
              borderRadius: 10,
              borderBottomColor: "#C97C25",
              marginTop: 7,
              color: "#1F1F1F",
              borderWidth: 1,
              borderColor: "#C97C25",
            }}
            placeholder="* * * * * * * * * * * * "
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ color: "red", fontFamily: "Montserrat" }}>
              {error}
            </Text>
            <Pressable android_ripple={{ color: "#00000010" }}>
              <Text
                style={{
                  color: "rgba(31, 31, 31, 0.5)",
                }}
              >
                Forgot Password?
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          height: (30 * HEIGHT) / 100,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            borderRadius: 10,
            overflow: "hidden",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Pressable
            disabled={loading}
            onPress={loginHandler}
            android_ripple={{ color: "#ffffff50" }}
            style={{
              backgroundColor: "#1F1F1F",
              width: "80%",
              paddingVertical: 20,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "MontserratBold",
                fontSize: 17,
              }}
            >
              {loading ? "loading..." : "Connect now"}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderRadius: 10,
            overflow: "hidden",
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("SignUp");
            }}
            android_ripple={{ color: "#00000020" }}
            style={{
              backgroundColor: "#fff",
              width: "80%",
              paddingVertical: 20,
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#1F1F1F",
            }}
          >
            <Text
              style={{
                color: "#1F1F1F",
                fontFamily: "MontserratBold",
                fontSize: 17,
              }}
            >
              Create Account
            </Text>
          </Pressable>
          <Text
            style={{
              width: "80%",
              textAlign: "center",
              color: "rgba(31, 31, 31, 0.5)",
              fontFamily: "Montserrat",
              marginTop: 10,
            }}
          >
            By continuing, you accept our
            <Pressable android_ripple={{ color: "#00000030" }}>
              <Text
                style={{
                  marginBottom: 10,
                  color: "#000",
                  textDecorationLine: "underline",
                }}
              >
                Terms and Conditions, Privacy Policy
              </Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
}
