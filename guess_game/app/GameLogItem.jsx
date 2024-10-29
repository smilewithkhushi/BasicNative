import { View, Text } from "react-native";
import React from "react";

export default function GameLogItem({ roundNumber, guess }) {
  return (
    <View className="flex flex-row border-2  justify-between px-14 m-2 bg-yellow-500 p-4 rounded-3xl">
      <Text className="text-xl font-[Poppins]">#{roundNumber}</Text>

      <Text className="text-xl font-[Poppins]">Opponent's guess: {guess}</Text>
    </View>
  );
}
