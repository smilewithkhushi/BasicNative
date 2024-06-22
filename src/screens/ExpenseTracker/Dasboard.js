import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const Dashboard = ({ navigation, route }) => {
  const defaultExpenses = [
    { amount: 50, category: "Food", date: new Date().toISOString() },
    { amount: 100, category: "Transport", date: new Date().toISOString() },
  ];
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [totalExpenses, setTotalExpenses] = useState(100);
  const [salary, setSalary] = useState(3000); // Initial salary value
  const [isEditingSalary, setIsEditingSalary] = useState(false);
  const [tempSalary, setTempSalary] = useState(salary);

  useEffect(() => {
    if (route.params?.newExpense) {
      const updatedExpenses = [...expenses, route.params.newExpense];
      setExpenses(updatedExpenses);
      const updatedTotalExpenses = updatedExpenses.reduce(
        (sum, expense) => sum + parseFloat(expense.amount),
        0
      );
      setTotalExpenses(updatedTotalExpenses);
    }
  }, [route.params?.newExpense]);

  const expenseData = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
      },
    ],
  };

  const handleSaveSalary = () => {
    setSalary(tempSalary);
    setIsEditingSalary(false);
  };

  const chartConfig = {
    backgroundGradientFrom: "#3F8782",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#3F8782",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(41, 117, 111, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expense Tracker</Text>
      <Text>Total Expenses: ₹ {totalExpenses}</Text>
      <View style={styles.salaryContainer}>
        {isEditingSalary ? (
          <TextInput
            placeholder="Enter Salary"
            value={tempSalary.toString()}
            onChangeText={(text) => setTempSalary(parseFloat(text) || 0)}
            keyboardType="numeric"
            style={styles.input}
          />
        ) : (
          <Text style={styles.salaryText}>{`Total Income: ₹ ${salary}`}</Text>
        )}
      </View>

      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 10,
          marginHorizontal: 5,
          padding: "3%",
        }}
        data={chartData}
        width={Dimensions.get("window").width - 50}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
      />

      <View
        style={{
          gap: Dimensions.get("window").width * 0.05,
          position: "absolute",
          width: "100%",
          bottom: 40,
          alignItems: "center",
          justifyContent: "center",
          left: 15,
        }}
      >
        <TouchableOpacity
          style={{
            width: "80%",
            alignSelf: "center",
            backgroundColor: "white",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: "3%",
            borderColor: "#3F8782",
            borderWidth: 2,
          }}
          onPress={() => {
            isEditingSalary ? handleSaveSalary : () => setIsEditingSalary(true);
          }}
        >
          <Text style={{ color: "#3F8782", fontSize: 16, fontWeight: "900" }}>
            {isEditingSalary ? "Save" : "Edit Salary"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "80%",
            alignSelf: "center",
            backgroundColor: "#3F8782",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: "3%",
          }}
          onPress={() => navigation.navigate("Add Expense")}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "900" }}>
            Add Expense
          </Text>
        </TouchableOpacity>
      </View>
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
  salaryContainer: {
    // flexDirection: "row",
    // alignItems: "center",
    marginBottom: 16,
  },
  salaryText: {
    // fontSize: 1,
    // marginLeft: 8,
    // marginRight: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default Dashboard;
