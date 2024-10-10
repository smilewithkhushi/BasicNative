import { View, Text } from "react-native";
import React from "react";

export default function NumberContainer({ children }) {
  return (
    <View className="border-1  border-orange-500 border-4 rounded-xl m-6 p-8  items-center justify-center">
      <Text className="text-orange-400 text-5xl font-bold">{children}</Text>
    </View>
  );
}
