import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Touchable,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./src/screens/Calculator/calculator";
import Home from "./src/screens/Home/home";
import Gallery from "./src/screens/Gallery/gallery";
import BasicButtons from "./src/screens/BasicButtons/basicbuttons";
import RPSGame from "./src/screens/RockPaperScissor/RPSGame";
import BookFinder from "./src/screens/BookFinder/BookFinder";
import ToDoList from "./src/screens/ToDoList/toDoList";
import AddTaskScreen from "./src/screens/ToDoList/addTask";
import QRScanner from "./src/screens/QRScanner/qrScanner";
import MovieFinder from "./src/screens/MovieFinder/MovieFinder";
import HexColorGeneratorScreen from "./src/screens/HexColorGenerator/HexColorGeneratorScreen";
import QRCodeGenerator from "./src/screens/QRGenerator/QRGenerator";
import RecipeFinder from "./src/screens/RecipeFinder/RecipeFinder";
import TicTacToe from "./src/screens/TicTacToe/TicTacToe";
import Icons from "./src/screens/TicTacToe/components/Icons";
import AnimeFinder from "./src/screens/AnimeFinder/AnimeFinder";
import Pokedex from "./src/screens/Pokedex/Pokedex";
import AddWorkout from "./src/screens/FitnessTracker/AddWorkout";
import WorkoutOverview from "./src/screens/FitnessTracker/WorkoutOverview";
import AddExpense from "./src/screens/ExpenseTracker/AddExpense";
import Dashboard from "./src/screens/ExpenseTracker/Dasboard";
import CodingQuiz from "./src/screens/CodingQuiz/CodingQuiz";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Basic Components"
          component={BasicButtons}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Image Gallery"
          component={Gallery}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Rock Paper Scissors Game"
          component={RPSGame}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Book Finder"
          component={BookFinder}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="Movie Finder"
          component={MovieFinder}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="Hex Color"
          component={HexColorGeneratorScreen}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="To Do List"
          component={ToDoList}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Add Task"
          component={AddTaskScreen}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="Add Expense"
          component={AddExpense}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="QR Scanner"
          component={QRScanner}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="QR Generator"
          component={QRCodeGenerator}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Recipe Finder"
          component={RecipeFinder}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tic Tac Toe"
          component={TicTacToe}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Workout Overview"
          component={WorkoutOverview}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Add Workout"
          component={AddWorkout}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="Anime Finder"
          component={AnimeFinder}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "#00ff99",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            cardStyle: { backgroundColor: "#121212" },
            animationEnabled: true,
            animationTypeForReplace: "push",
            transitionSpec: {
              open: {
                animation: "timing",
                config: { duration: 300 },
              },
              close: {
                animation: "timing",
                config: { duration: 300 },
              },
            },
          }}
        />
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#121212",
            },
            headerTintColor: "#00ff99",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            cardStyle: { backgroundColor: "#121212" },
            animationEnabled: true,
            animationTypeForReplace: "push",
            transitionSpec: {
              open: {
                animation: "timing",
                config: { duration: 300 },
              },
              close: {
                animation: "timing",
                config: { duration: 300 },
              },
            },
          }}
        />
        <Stack.Screen
          name="Coding Quiz"
          component={CodingQuiz}
          options={{ headerShown: true, animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
