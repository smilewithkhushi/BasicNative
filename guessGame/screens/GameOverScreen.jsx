import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  replayGame,
}) {
  return (
    <View className="mt-10">
      <Text className="text-3xl text-center">Game Over ! </Text>

      <Text className="text-2xl mt-10 text-white font-[Mons]">
        Your Phone Need <Text>{roundsNumber}</Text> Rounds To Guess Number{" "}
        <Text>{userNumber} </Text>
      </Text>
      <View className="flex items-center justify-center mt-20">
        <TouchableOpacity className="p-2 bg-pink-700 rounded-2xl">
          <Text onPress={replayGame} className="text-2xl">
            Wanna Play Agian !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
