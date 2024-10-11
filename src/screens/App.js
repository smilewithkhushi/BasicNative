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
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
import HabitTracker from "./src/screens/HabitTracker/HabitTracker";
import AddHabitScreen from "./src/screens/HabitTracker/AddHabitScreen";
import WorkoutOverview from "./src/screens/FitnessTracker/WorkoutOverview";
import AddExpense from "./src/screens/ExpenseTracker/AddExpense";
import Dashboard from "./src/screens/ExpenseTracker/Dasboard";
import CodingQuiz from "./src/screens/CodingQuiz/CodingQuiz";
import TimerHome from "./src/screens/Timer/TimerHome";
import MusicPlayer from "./src/screens/MusicPlayer/musicplayer";
import MyChatApp from "./src/screens/MyChatApp/MyChatApp";
import SeatingChart from "./src/screens/SeatingChart/SeatingChart";
import WeatherApp from "./src/screens/Weather App/WeatherApp";
import VideoCallingApp from "./src/screens/Video Calling App/VideoCallingApp";
import SosApp from "./src/screens/SOSAlertApp/SosApp";
import Octicons from 'react-native-vector-icons/Octicons'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#DEC3D7'
              },
              // headerBackImageSource: () => (
              //   <View style={{ marginLeft: 15 }}>
              //     <Octicons name="chevron-left"  color="black" />
              //   </View>
              // )
            }}
          />
          <Stack.Screen
            name="Image Gallery"
            component={Gallery}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FAE7CA'
              },
              headerBackVisible: true,

            }}
          />
          <Stack.Screen
            name="Habit Tracker"
            component={HabitTracker}
            options={{
              headerShown: true,
              animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FAE7CA',
              },
            }}
          />
          <Stack.Screen
            name="Add Habit"
            component={AddHabitScreen}
            options={{
              headerShown: true,
              title: 'Add New Habit',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FAE7CA',
              },
            }}
          />
          <Stack.Screen
            name="Rock Paper Scissors Game"
            component={RPSGame}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FAD8F8'
              },
            }}
          />
          <Stack.Screen
            name="Book Finder"
            component={BookFinder}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFE4E1'
              },
            }}
          />
          <Stack.Screen
            name="Calculator"
            component={Calculator}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#E8EBE7'
              },
            }}
          />

          <Stack.Screen
            name="Movie Finder"
            component={MovieFinder}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#F9D3EB'
              },
            }}
          />

          <Stack.Screen
            name="Hex Color"
            component={HexColorGeneratorScreen}
            options={{ headerShown: true, animation: "slide_from_right", headerTitleAlign: 'center', }}
          />
          <Stack.Screen
            name="To Do List"
            component={ToDoList}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#BAF0F9'
              },
            }}
          />

          <Stack.Screen
            name="Add Task"
            component={AddTaskScreen}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#BAF0F9'
              },
            }}
          />

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ABD6CC'
              },
            }}
          />

          <Stack.Screen
            name="Add Expense"
            component={AddExpense}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#ABD6CC'
              },
            }}
          />

          <Stack.Screen
            name="QR Scanner"
            component={QRScanner}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#A7D1F7'
              },
            }}
          />

          <Stack.Screen
            name="QR Generator"
            component={QRCodeGenerator}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#A7D1F7'
              },
            }}
          />
          <Stack.Screen
            name="Recipe Finder"
            component={RecipeFinder}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tic Tac Toe"
            component={TicTacToe}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#F89393'
              },
            }}
          />
          <Stack.Screen
            name="Workout Overview"
            component={WorkoutOverview}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#D0FAF8'
              },
            }}
          />
          <Stack.Screen
            name="Timer App"
            component={TimerHome}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />

          <Stack.Screen
            name="Music Player"
            component={MusicPlayer}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#E8EBE9'
              },
            }}
          />

          <Stack.Screen
            name="Add Workout"
            component={AddWorkout}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#D0FAF8'
              },
            }}
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
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#BBFCCB'
              },
            }}
          />
          <Stack.Screen
            name="My Chat App"
            component={MyChatApp}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFE4E1'
              },
            }}
          />
          <Stack.Screen
            name="SOS App"
            component={SosApp}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFE4E1'
              },
            }}
          />
          <Stack.Screen
            name="Weather App"
            component={WeatherApp}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFE4E1'
              },
            }}
          />
          <Stack.Screen
            name="Seating Chart"
            component={SeatingChart}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFE4E1'
              },
            }}
          />
          <Stack.Screen
            name="Video Calling App"
            component={VideoCallingApp}
            options={{
              headerShown: true, animation: "slide_from_right",
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FFE4E1'
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
