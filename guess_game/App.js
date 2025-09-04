import { ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundsGame, setRoundsGame] = useState(0);
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/font/Poppins-Black.ttf"),
    Mons: require("./assets/font/Montserrat-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };
  const gameOverHandler = (numberRounds) => {
    setGameOver(true);
    setRoundsGame(numberRounds);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  const replayGameHandler = () => {
    setUserNumber(null);
    setGameOver(false);
    setRoundsGame(0);
    screen = <StartGameScreen />;
  };
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        replayGame={replayGameHandler}
        roundsNumber={roundsGame}
      />
    );
  }

  return (
    <LinearGradient className="flex-1" colors={["#4e0829", "#ddb52f"]}>
      <ImageBackground
        className="w-full h-full"
        imageStyle={{ opacity: 0.15 }}
        source={{
          uri: "https://github.com/academind/react-native-practical-guide-code/blob/04-deep-dive-real-app/extra-files/images/background.png?raw=true",
        }}
        resizeMode="cover"
      >
        <SafeAreaView className="p-3">{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
