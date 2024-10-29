import {
  View,
  TextInput,
  Text,
  Alert,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../app/components/PrimaryButton";
import Title from "../app/components/Title";

export default function StartGameScreen({ onPickNumber }) {
  const { width, height } = useWindowDimensions();
  console.log(width, height);

  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber < 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Number Has To Between 0 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }

    onPickNumber(choosenNumber);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView className="flex-1" behavior="position">
        <View className={`${height < 420 ? "mt-4" : "mt-24"}`}>
          <Title>Guess Number</Title>

          <View
            style={{ elevation: 20 }}
            className="flex justify-center items-center mx-6 rounded-lg p-4 mt-20 bg-pink-800"
          >
            <Text className="text-orange-400 text-xl">Enter Your Guess</Text>
            <TextInput
              value={enteredNumber}
              onChangeText={numberInputHandler}
              maxLength={2}
              className=" bg-pink-800 text-white  p-2 mb-4 text-2xl h-12 w-16 border-[#ddb52f] border-b-4 px-4  text-center font-bold"
              keyboardType="number-pad"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <View className="flex flex-row  gap-4">
              <View className="flex-1">
                <PrimaryButton onPress={resetInputHandler} title="Reset" />
              </View>
              <View className="flex-1">
                <PrimaryButton onPress={confirmInputHandler} title="Confirm" />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "Mons",
  },
});
