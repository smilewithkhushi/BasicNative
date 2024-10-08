import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";

const AddHabitScreen = () => {
  const navigation = useNavigation();
  const [habit, setHabit] = useState("");

  // Save the habit
  const saveHabit = () => {
    if (habit.trim() === "") {
      Toast.show({
        type: "error",
        text1: "Habit cannot be empty",
        position: "bottom",
      });
      return;
    }

    AsyncStorage.getItem("habits")
      .then((storedHabits) => {
        const habits = storedHabits ? JSON.parse(storedHabits) : [];
        const newHabit = {
          id: habits.length + 1,
          title: habit,
          completedDates: [], // Initialize as empty array for tracking completion
        };
        habits.push(newHabit);
        AsyncStorage.setItem("habits", JSON.stringify(habits))
          .then(() => {
            Toast.show({
              type: "success",
              text1: "Habit Added Successfully",
              position: "bottom",
            });
            navigation.navigate("Habit Tracker", { updatedHabits: habits });
          })
          .catch((error) => console.error("Error saving habit:", error));
      })
      .catch((error) => console.error("Error retrieving habits:", error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Habit"
        style={styles.input}
        value={habit}
        onChangeText={(text) => setHabit(text)}
        autoCapitalize="words" // Capitalize each word
      />
      <TouchableOpacity onPress={saveHabit} style={styles.saveButton}>
        <LinearGradient
          colors={["#FF6F61", "#FF3D00"]}
          style={styles.buttonGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.buttonText}>Save Habit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 20,
    justifyContent: "center", // Center vertically
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#ffffff", // White background for input
    elevation: 1, // Slight shadow for depth
  },
  saveButton: {
    borderRadius: 10,
  },
  buttonGradient: {
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF5EE",
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default AddHabitScreen;
