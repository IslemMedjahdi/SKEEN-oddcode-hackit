import React from "react";
import { View, Text, ImageBackground, Image, Pressable } from "react-native";
import graph from '../../assets/chart.png'
export default function Home({ navigation }) {
  return (
    <View style={{ alignItems:'center', justifyContent: 'space-around'}}>
        <Text style={{fontSize:30, fontFamily:'Cinzel', marginTop:20}}>
            Home
        </Text>
        <Text style={{fontfontSize:24, fontFamily:'Montserrat', marginTop:20}}>
            Skin improvement with time
        </Text>
        <Image source={graph} style={{margin:15, borderRadius: 20, width: 370}}></Image>
    </View>
  );
}
