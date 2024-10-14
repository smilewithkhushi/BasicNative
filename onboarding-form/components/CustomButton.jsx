import { TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MotiView } from "moti";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function CustomButton({ onPress, buttonVal, className }) {
  // State to manage expanded state
  const [isExpanded, setIsExpanded] = useState(false);

  // Effect to handle changes in buttonVal
  useEffect(() => {
    setIsExpanded(buttonVal === 2);
  }, [buttonVal]);

  return (
    <View className={`${className} items-center `}>
      <TouchableOpacity onPress={onPress}>
        <MotiView
          className="items-center justify-center mb-6 bg-zinc-950 rounded-full"
          from={{ width: 120, height: 120 }}
          animate={{
            width: isExpanded ? 250 : 120,
            height: isExpanded ? 80 : 120,
            backgroundColor: isExpanded ? "white" : "black",
          }}
          transition={{
            type: "spring",
            duration: 1400,
          }}
        >
          {isExpanded ? (
            <View className="flex-1 justify-center items-center flex-row">
              <Text className="text-black text-3xl mr-2"> Start</Text>
              <Ionicons name="checkmark-done" size={30} color="black" />
            </View>
          ) : (
            <AntDesign name="arrowright" size={34} color="white" />
          )}
        </MotiView>
      </TouchableOpacity>
    </View>
  );
}
