import React, { useState, useEffect, useRef } from "react";
import { Dimensions, Pressable, Text, View, Image } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();
  const takePicHandler = async () => {
    if (!Camera) return;
    const photo = await cameraRef.current.takePictureAsync();
    await AsyncStorage.setItem("photo", photo.uri);
    navigation.replace("Results", { photo: photo.uri });
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      await AsyncStorage.setItem("photo", result.uri);
      navigation.replace("Results", { photo: result.uri });
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: (90 * Dimensions.get("window").height) / 100,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontFamily: "Cinzel",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Scan
          </Text>
        </View>
        <Camera
          ref={cameraRef}
          ratio="1:1"
          style={{ height: "75%", width: "100%" }}
          type={type}
        ></Camera>
        <View
          style={{
            height: "15%",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() =>
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }
          >
            <Image
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
              source={require("../../assets/switch.png")}
            />
          </Pressable>
          <Pressable
            onPress={takePicHandler}
            android_ripple={{ color: "#ffffff" }}
            style={{
              backgroundColor: "white",
              height: 60,
              width: 60,
              borderRadius: 30,
              borderColor: "#CAA29F",
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: "#CAA29F",
                borderRadius: 30,
              }}
            />
          </Pressable>
          <Pressable onPress={pickImage}>
            <Image
              resizeMode="contain"
              style={{ width: 35, height: 35 }}
              source={require("../../assets/add.png")}
            />
          </Pressable>
        </View>
      </View>
      <View>
        <Footer navigation={navigation} index={1} />
      </View>
    </View>
  );
}
