import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import Footer from "../components/Footer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const products = [
  {
    id: 1,
    type: "Ordinary",
    name: "Serum D",
    price: "2000 DA",
    image: require("../../assets/image1.png"),
  },
  {
    id: 2,
    type: "Curology",
    name: "Anti-Aging",
    price: "1550 DA",
    image: require("../../assets/image2.png"),
  },
  {
    id: 3,
    type: "I’m fabulous",
    name: "Body oil",
    price: "3950 DA",
    image: require("../../assets/image3.png"),
  },
];

export default function Results({ navigation, route }) {
  const [photoResult, setPhotoResult] = useState("");
  useEffect(() => {
    if (route && route.params) {
      const { photo } = route.params;
      setPhotoResult(photo);
    } else {
      AsyncStorage.getItem("photo").then(
        (photo) => photo && setPhotoResult(photo)
      );
    }
  });

  return (
    <View style={{}}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{ alignItems: "center" }}
        style={{
          height: (90 * Dimensions.get("window").height) / 100,
        }}
      >
        <View
          style={{
            height: (60 * HEIGHT) / 100,
            width: "100%",
            alignItems: "center",
            backgroundColor: "#2D1010",
            borderRadius: (50 * WIDTH) / 100,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <Text
            style={{
              fontFamily: "Cinzel",
              fontSize: 25,
              color: "white",
              marginTop: 10,
            }}
          >
            Results
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
              marginTop: 15,
            }}
          >
            {photoResult.length > 0 && (
              <>
                <Image
                  resizeMode="contain"
                  source={{ uri: photoResult }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 75,
                    borderWidth: 3,
                    borderColor: "white",
                  }}
                />
                <View>
                  <View>
                    <Text style={{ color: "white", fontFamily: "Montserrat" }}>
                      Type
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "MontserratBold",
                        fontSize: 25,
                      }}
                    >
                      Acne
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "60%",
                      height: 1,
                      backgroundColor: "white",
                      marginVertical: 10,
                    }}
                  />
                  <View>
                    <Text style={{ color: "white", fontFamily: "Montserrat" }}>
                      Probalility
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "MontserratBold",
                        fontSize: 25,
                      }}
                    >
                      68%
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Possible Causes Probability
            </Text>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 10,
                  alignSelf: "baseline",
                }}
              >
                Stress 68%
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#C2C2C250",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Animatable.View
                  animation={"slideInLeft"}
                  style={{
                    width: "68%",
                    backgroundColor: "#D88181",
                    height: "100%",
                    borderRadius: 10,
                  }}
                ></Animatable.View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 10,
                  alignSelf: "baseline",
                }}
              >
                Diet 52%
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#C2C2C250",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Animatable.View
                  animation={"slideInLeft"}
                  delay={100}
                  style={{
                    width: "52%",
                    backgroundColor: "#CAA29F",
                    height: "100%",
                    borderRadius: 10,
                  }}
                ></Animatable.View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={{ width: "70%", alignItems: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  marginTop: 10,
                  alignSelf: "baseline",
                }}
              >
                Sleep 35%
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,
                  backgroundColor: "#C2C2C250",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Animatable.View
                  delay={200}
                  animation={"slideInLeft"}
                  style={{
                    width: "35%",
                    backgroundColor: "#C57722",
                    height: "100%",
                    borderRadius: 10,
                  }}
                ></Animatable.View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: "80%", marginTop: 10 }}>
          <View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 16 }}>
              About Acne
            </Text>
            <Animatable.View
              style={{ width: "100%" }}
              animation={"fadeInLeft"}
              duration={700}
              delay={0}
            >
              <Pressable
                android_ripple={{ color: "#ffffff50" }}
                style={{
                  padding: 20,
                  marginTop: 10,
                  backgroundColor: "#CAA29F",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  Acne is a skin condition that occurs when your hair follicles
                  become plugged with oil and dead skin cells. It causes
                  whiteheads, blackheads or pimples.
                </Text>
              </Pressable>
            </Animatable.View>
          </View>
        </View>
        <View style={{ width: "80%", marginTop: 10 }}>
          <View>
            <Text style={{ fontFamily: "MontserratBold", fontSize: 16 }}>
              Some Tips
            </Text>
            <Animatable.View
              style={{ width: "100%" }}
              animation={"fadeInRight"}
              duration={700}
              delay={500}
            >
              <Pressable
                android_ripple={{ color: "#ffffff50" }}
                style={{
                  padding: 20,
                  marginTop: 10,
                  backgroundColor: "#D88181",
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                  }}
                >
                  Stress
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  {"- Deep breathing exercises.\n - Meditation."}
                </Text>
              </Pressable>
            </Animatable.View>
          </View>
        </View>
        <Animatable.View
          style={{ width: "100%", alignItems: "center" }}
          animation={"fadeInLeft"}
          duration={700}
          delay={1000}
        >
          <Pressable
            android_ripple={{ color: "#ffffff50" }}
            style={{
              width: "80%",
              marginTop: 10,
              backgroundColor: "#CAA29F",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <View style={{ width: "100%" }}>
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                  }}
                >
                  Diet
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  {"- Choosing whole grain foods.\n -  Eating protein foods."}
                </Text>
              </View>
            </View>
          </Pressable>
        </Animatable.View>
        <Animatable.View
          style={{ width: "100%", alignItems: "center" }}
          animation={"fadeInRight"}
          duration={700}
          delay={1500}
        >
          <Pressable
            android_ripple={{ color: "#ffffff50" }}
            style={{
              width: "80%",
              marginVertical: 10,
              backgroundColor: "#C57722",
              borderRadius: 15,
              padding: 20,
            }}
          >
            <View style={{ width: "100%" }}>
              <View>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "MontserratBold",
                    fontSize: 16,
                  }}
                >
                  Sleep
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  {
                    " - Stick to a sleep schedule.\n - Pay attention to what you eat and drink."
                  }
                </Text>
              </View>
            </View>
          </Pressable>
        </Animatable.View>
        <View style={{ width: "80%", marginVertical: 10 }}>
          <Text style={{ fontFamily: "MontserratBold" }}>
            Recommanded Products
          </Text>
        </View>
        <View style={{ width: "95%" }}>
          <FlatList
            contentContainerStyle={{ marginBottom: 20 }}
            horizontal
            nestedScrollEnabled
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 10,
                  marginRight: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  android_ripple={{ color: "#00000010" }}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                  }}
                >
                  <Image
                    style={{ width: 60, height: 60, marginRight: 10 }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        color: "#B1B1B1",
                      }}
                    >
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        color: "#494949",
                        fontSize: 15,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Montserrat",
                        color: "#F08F5F",
                        fontSize: 15,
                      }}
                    >
                      {item.price}
                    </Text>
                  </View>
                </Pressable>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <View>
        <Footer navigation={navigation} index={2} />
      </View>
    </View>
  );
}
