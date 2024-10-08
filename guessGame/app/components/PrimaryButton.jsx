import { View, Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({ title,onPress }) {
  return (
    <View className="flex">
      <TouchableOpacity
        onPress={onPress}
        className="flex px-6 py-1 mb-2 shadow rounded-full bg-orange-400 w-fit"
      >
        <Text className="text-2xl text-center">{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
