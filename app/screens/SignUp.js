import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Dimensions, Pressable, TextInput, Text, View } from "react-native";
import { auth, db } from "../core/firebaseConfig";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function SignUp({ navigation }) {
  const [data, setData] = useState({
    fName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const signUpHandler = () => {
    setError("");
    setLoading(true);
    if (data.fName.trim().length === 0) {
      setError("Incorrect Full Name");
      setLoading(false);
      return;
    }
    if (data.age > 99 || data.age < 13) {
      setError("Incorrect Age");
      setLoading(false);
      return;
    }
    if (data.gender !== "male" && data.gender !== "female") {
      setError("Incorrect Gander");
      setLoading(false);
      return;
    }
    if (data.password !== data.confirmPassword) {
      setError("Password Missmatch");
      setLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, data.email.trim(), data.password)
      .then((user) => {
        const ref = doc(db, "users", user.user.uid);
        setDoc(ref, {
          email: data.email,
          fName: data.fName,
          age: data.age,
          gender: data.gender,
        })
          .then(() => {
            navigation.replace("SelectWearable");
          })
          .catch((e) => setError(e.code));
      })
      .catch((error) => setError(error.code))
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
        <Text style={{ fontFamily: "Cinzel", color: "#FFFFFF", fontSize: 20 }}>
          Welcome gorgeous creature
        </Text>
        <Text
          style={{
            width: "75%",
            fontFamily: "Montserrat",
            color: "#FFFFFF",
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
          height: (50 * HEIGHT) / 100,
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
            Full name
          </Text>
          <TextInput
            onChangeText={(text) => setData({ ...data, fName: text })}
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              width: "100%",
              padding: 10,
              borderRadius: 10,
              marginTop: 7,
              color: "#1F1F1F",
              borderWidth: 1,
              borderColor: "#C97C25",
            }}
            placeholder="Nom et Prénom"
          />
        </View>
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
              marginTop: 7,
              color: "#1F1F1F",
              borderWidth: 1,
              borderColor: "#C97C25",
            }}
            placeholder="example@gmail.com"
          />
        </View>
        <View style={{ alignItems: "center", width: "80%" }}>
          <Text
            style={{
              fontFamily: "Montserrat",
              width: "100%",
              color: "#1F1F1F",
            }}
          >
            New password
          </Text>
          <TextInput
            secureTextEntry
            onChangeText={(text) => setData({ ...data, password: text })}
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              width: "100%",
              padding: 10,
              borderRadius: 10,
              marginTop: 7,
              color: "#1F1F1F",
              borderWidth: 1,
              borderColor: "#C97C25",
            }}
            placeholder="* * * * * * * * * "
          />
        </View>
        <View style={{ alignItems: "center", width: "80%" }}>
          <Text
            style={{
              fontFamily: "Montserrat",
              width: "100%",
              color: "#1F1F1F",
            }}
          >
            Confirm Password
          </Text>
          <TextInput
            secureTextEntry
            onChangeText={(text) => setData({ ...data, confirmPassword: text })}
            style={{
              backgroundColor: "#FFFFFF",
              color: "black",
              width: "100%",
              padding: 10,
              borderRadius: 10,
              marginTop: 7,
              color: "#1F1F1F",
              borderWidth: 1,
              borderColor: "#C97C25",
            }}
            placeholder="* * * * * * * * * "
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "center", width: "45%" }}>
            <Text
              style={{
                fontFamily: "Montserrat",
                width: "100%",
                color: "#1F1F1F",
              }}
            >
              Age
            </Text>
            <TextInput
              keyboardType="decimal-pad"
              onChangeText={(text) => setData({ ...data, age: text })}
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                width: "100%",
                padding: 10,
                borderRadius: 10,
                marginTop: 7,
                color: "#1F1F1F",
                borderWidth: 1,
                borderColor: "#C97C25",
              }}
              placeholder="age"
            />
          </View>
          <View style={{ alignItems: "center", width: "45%" }}>
            <Text
              style={{
                fontFamily: "Montserrat",
                width: "100%",
                color: "#1F1F1F",
              }}
            >
              Gender
            </Text>
            <TextInput
              onChangeText={(text) => setData({ ...data, gender: text })}
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                width: "100%",
                padding: 10,
                borderRadius: 10,
                marginTop: 7,
                color: "#1F1F1F",
                borderWidth: 1,
                borderColor: "#C97C25",
              }}
              placeholder="gender"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          height: (15 * HEIGHT) / 100,
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
            onPress={signUpHandler}
            android_ripple={{ color: "#ffffff50" }}
            style={{
              backgroundColor: "#1F1F1F70",
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
              {loading ? "Loading..." : "Create account"}
            </Text>
          </Pressable>
          <Text
            style={{
              width: "80%",
              color: "red",
              fontFamily: "Montserrat",
              marginTop: 5,
            }}
          >
            {error}
          </Text>
        </View>
      </View>
    </View>
  );
}
