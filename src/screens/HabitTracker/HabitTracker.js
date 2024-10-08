import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import { MaterialIcons } from '@expo/vector-icons';

export default function HabitTracker({ navigation }) {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    try {
      const storedHabits = await AsyncStorage.getItem("habits");
      if (storedHabits !== null) {
        const habitsData = JSON.parse(storedHabits).map(habit => ({
          ...habit,
          completedDates: habit.completedDates || []
        }));
        setHabits(habitsData);
      }
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchHabits();
    }, [])
  );

  const toggleHabitCompletion = (habitId) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const today = new Date().toISOString().split('T')[0];
        const completedDates = habit.completedDates || [];

        if (!completedDates.includes(today)) {
          completedDates.push(today);
        } else {
          completedDates.pop();
        }

        return { ...habit, completedDates };
      }
      return habit;
    });

    setHabits(updatedHabits);
    AsyncStorage.setItem("habits", JSON.stringify(updatedHabits)).catch((error) =>
      console.error("Error updating habits:", error)
    );
  };

  const deleteHabit = (habitId) => {
    const updatedHabits = habits.filter((habit) => habit.id !== habitId);
    setHabits(updatedHabits);
    Toast.show({
      type: "success",
      text1: "Habit Deleted",
      position: "bottom",
    });
    AsyncStorage.setItem("habits", JSON.stringify(updatedHabits)).catch((error) =>
      console.error("Error updating habits:", error)
    );
  };

  const renderHabitItem = ({ item }) => {
    const streakCount = item.completedDates ? item.completedDates.length : 0;

    return (
      <View style={styles.habitItem}>
        <TouchableOpacity
          style={[styles.checkbox, item.completedDates.includes(new Date().toISOString().split('T')[0]) && styles.completedCheckbox]}
          onPress={() => toggleHabitCompletion(item.id)}
        >
          {item.completedDates.includes(new Date().toISOString().split('T')[0]) && <Text style={styles.tickIcon}>✓</Text>}
        </TouchableOpacity>
        <View style={styles.habitDetails}>
          <Text style={[styles.habitTitle, item.completedDates.includes(new Date().toISOString().split('T')[0]) && styles.completedHabit]}>
            {item.title}
          </Text>
          <Text style={styles.streakText}>Streak: {streakCount} day{streakCount !== 1 ? 's' : ''}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteHabit(item.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  const addHabit = () => {
    navigation.navigate("Add Habit");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/R.72639fc64e210ca0c403d5b8a564f42a?rik=ftwSYpwqlUs3cw&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f90%2f9%2fVo1TRa.jpg&ehk=CCjaGK4pyYcH2DpSZe5g7UI7gCI1yRF6h7r3uUzwCv4%3d&risl=&pid=ImgRaw&r=0' }}
        style={styles.inspiringImage}
      />
      <Text style={styles.slogan}>"Small Steps, Big Changes!"</Text>
      {habits.length === 0 ? (
        <Text style={styles.noHabitsText}>No habits found! Add some habits to get started.</Text>
      ) : (
        <FlatList
          data={habits}
          renderItem={renderHabitItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
      <TouchableOpacity onPress={addHabit} style={styles.addButton}>
        <LinearGradient
          colors={["#FF6F61", "#FF3D00"]}
          style={styles.buttonGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.addButtonText}>Add Habit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F9FC",
  },
  inspiringImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  slogan: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2980',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  noHabitsText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  habitItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10, // Increased margin for better spacing
    borderRadius: 10,
    backgroundColor: "#ffffff",
    elevation: 2,
    shadowColor: "#000", // Added shadow for iOS
    shadowOffset: { width: 0, height: 1 }, // Shadow properties
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  habitTitle: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    letterSpacing: 0.7,
    color: "#1A2980",
    textTransform: "capitalize",
  },
  completedHabit: {
    textDecorationLine: "line-through",
    color: "#ccc",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1A2980",
    marginRight: 10, // Added margin for spacing
  },
  completedCheckbox: {
    backgroundColor: "#d1ffd1",
  },
  tickIcon: {
    fontSize: 18,
    color: "green",
  },
  habitDetails: {
    flex: 1,
    justifyContent: "center",
  },
  streakText: {
    fontSize: 12,
    color: "#555",
  },
  addButton: {
    marginTop: 20,
  },
  buttonGradient: {
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: "#FFF5EE",
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
