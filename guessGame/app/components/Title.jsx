import { View, Text } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <Text className="text-3xl text-center text-white font-bold border-2 border-white p-3">
      {children}
    </Text>
  );
}
