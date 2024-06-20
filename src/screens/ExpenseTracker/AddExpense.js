import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AddExpense = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleAddExpense = () => {
    if (amount && category && date) {
      const newExpense = { amount, category, date };
      navigation.navigate("Dashboard", { newExpense });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Expense</Text>
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TouchableOpacity
        style={{
          width: "95%",
          alignSelf: "center",
          backgroundColor: "#3F8782",
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: "3%",
        }}
        onPress={() => handleAddExpense()}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "900" }}>
          Add Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: "95%",
    alignSelf: "center",
  },
});

export default AddExpense;
