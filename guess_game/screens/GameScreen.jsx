import {
  View,
  Text,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../app/components/Title";
import NumberContainer from "../app/components/NumberContainer";
import PrimaryButton from "../app/components/PrimaryButton";
import GameLogItem from "../app/GameLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  // getting width using Dimensions
  const deviceWidth = Dimensions.get("window").width;
  const { height, width } = useWindowDimensions();
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [onGameOver, userNumber, currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont't Lie ", "You know this isn't true....", [
        {
          text: "Okay",
          style: "destructive",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRnd = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRnd);
    setGuessRound((prevRound) => [newRnd, ...prevRound]);
  };
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessRoundListLength = guessRound.length;

  return (
    <>
      <ScrollView>
        {height < 420 && <Title>Opponent's Guess</Title>}
        <View
          className={`mt-10 ${
            height < 420 ? "flex-row items-center justify-center" : " flex"
          }`}
        >
          {height > 420 && <Title>Opponent's Guess</Title>}
          <NumberContainer>{currentGuess}</NumberContainer>
          {/* Guess */}
          <View className="bg-pink-900 py-4 rounded-3xl">
            <Text className="text-3xl text-center text-orange-400 font-[Poppins]">
              Higher Or Lower ?
            </Text>
            <View className="flex flex-row gap-4 justify-center mt-4">
              <View>
                <PrimaryButton
                  title="-"
                  onPress={nextGuessHandler.bind(this, "lower")}
                />
              </View>
              <View>
                <PrimaryButton
                  title="+"
                  onPress={nextGuessHandler.bind(this, "greater")}
                />
              </View>
            </View>
          </View>
          {/* <View>Log Rounds</View> */}
        </View>
        <FlatList
          data={guessRound}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GameLogItem
              guess={itemData.item}
              roundNumber={guessRoundListLength - itemData.index}
            />
          )}
        />
      </ScrollView> 
    </>
  );
}
