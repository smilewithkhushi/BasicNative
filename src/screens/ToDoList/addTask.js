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

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState("");

  // Save the task
  const saveTask = () => {
    AsyncStorage.getItem("tasks")
      .then((storedTasks) => {
        const tasks = storedTasks ? JSON.parse(storedTasks) : [];
        const newTask = { id: tasks.length + 1, title: task, completed: false };
        tasks.push(newTask);
        AsyncStorage.setItem("tasks", JSON.stringify(tasks))
          .then(() => {
            Toast.show({
              type: "success",
              text1: "Added Successfully",
              position: "bottom",
            });
            navigation.navigate("To Do List", { updatedTasks: tasks });
          })
          .catch((error) => console.error("Error saving task:", error));
      })
      .catch((error) => console.error("Error retrieving tasks:", error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Task"
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={saveTask}>
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
            Save Task
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 10,
  },
});

export default AddTaskScreen;
