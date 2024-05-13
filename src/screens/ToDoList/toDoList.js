import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";

export default function ToDoList({ navigation }) {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks from storage
  const fetchTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("tasks");
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Fetch tasks when component mounts
  useFocusEffect(
    React.useCallback(() => {
      fetchTasks();
    }, [])
  );

  const toggleTaskCompletion = (taskId) => {
    // Toggle task completion status
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    // Update storage with updated tasks
    AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks)).catch((error) =>
      console.error("Error updating tasks:", error)
    );
  };

  const deleteTask = (taskId) => {
    // Filter out the task with the given taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Update the state to re-render the component without the deleted task
    setTasks(updatedTasks);
    Toast.show({
      type: "success",
      text1: "Deleted Successfully",
      position: "bottom",
    });
    // Update storage with updated tasks
    AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks)).catch((error) =>
      console.error("Error updating tasks:", error)
    );
  };

  const renderTaskItem = ({ item }) => (
    <>
      <View style={styles.taskItem}>
        <TouchableOpacity
          style={[styles.checkbox]}
          onPress={() => toggleTaskCompletion(item.id)}
        >
          {item.completed && <Text style={styles.tickIcon}>✓</Text>}
        </TouchableOpacity>
        <Text
          style={[styles.taskTitle, item.completed && styles.completedTask]}
        >
          {item.title}
        </Text>
        {!item.completed && (
          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <Text style={{ color: "red" }}>🗑</Text>
          </TouchableOpacity>
        )}
      </View>
      <LinearGradient
        colors={["#200122", "#6f0000", "#200122"]}
        style={{ width: "98%", height: 2 }}
        locations={[0, 0.4, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      ></LinearGradient>
    </>
  );

  const addTask = () => {
    navigation.navigate("Add Task");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={addTask}>
        <LinearGradient
          colors={["#1A2980", "#26D0CE"]}
          style={{ padding: 15, alignItems: "center", borderRadius: 10 }}
          locations={[0, 1]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 16,
              color: "#FFF5EE",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
          >
            Add Task
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 3,
  },
  taskTitle: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    letterSpacing: 0.7,
    color: "#1A2980",
    textTransform: "capitalize",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#ccc",
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#1A2980",
  },
  tickIcon: {
    fontSize: 18,
    color: "green",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 20,
  },
});
