import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function ItemList({
  id,
  image,
  text,
  textColor,
  backgroundColor,
}) {
  const { height, width } = useWindowDimensions();
  return (
    <View className="flex-1 ">
      <LottieView
        style={{ height, width, backgroundColor }}
        source={image}
        autoPlay
        loop
      />
      <Text
        style={{ color: textColor }}
        className="text-4xl mx-10 text-center font-extrabold  absolute mt-[580]"
      >
        {text}
      </Text>
    </View>
  );
}
