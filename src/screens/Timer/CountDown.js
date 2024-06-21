import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Countdown = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const endTimeRef = useRef(null);

  const handleStart = () => {
    const hoursInMs = parseInt(hours, 10) * 3600 * 1000 || 0;
    const minutesInMs = parseInt(minutes, 10) * 60 * 1000 || 0;
    const secondsInMs = parseInt(seconds, 10) * 1000 || 0;
    const totalTime = hoursInMs + minutesInMs + secondsInMs;

    if (totalTime <= 0) {
      Alert.alert("Please set a valid time!");
      handleReset();
      return;
    }

    setTime(totalTime);
    endTimeRef.current = Date.now() + totalTime;
    setIsRunning(true);
  };

  useEffect(() => {
    if (isRunning) {
      // Start interval to update countdown every 100 milliseconds
      intervalRef.current = setInterval(() => {
        const remainingTime = endTimeRef.current - Date.now();
        if (remainingTime <= 0) {
          // Countdown finished
          clearInterval(intervalRef.current);
          setIsRunning(false);
          Alert.alert("Time is up!");
          setTime(0);
          handleReset();
        } else {
          // Update remaining time
          setTime(remainingTime);
        }
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const getSeconds = `0${totalSeconds % 60}`.slice(-2);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const getMinutes = `0${totalMinutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(totalMinutes / 60)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleMinutesChange = (value) => {
    const intValue = parseInt(value, 10);
    if (intValue >= 60) {
      Alert.alert("Minutes cannot be 60 or more!");
      setMinutes("");
    } else {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (value) => {
    const intValue = parseInt(value, 10);
    if (intValue >= 60) {
      Alert.alert("Seconds cannot be 60 or more!");
      setSeconds("");
    } else {
      setSeconds(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="hh"
          keyboardType="numeric"
          maxLength={2}
          value={hours}
          onChangeText={setHours}
        />
        <Text style={styles.colon}>:</Text>
        <TextInput
          style={styles.input}
          placeholder="mm"
          keyboardType="numeric"
          maxLength={2}
          value={minutes}
          onChangeText={handleMinutesChange}
        />
        <Text style={styles.colon}>:</Text>
        <TextInput
          style={styles.input}
          placeholder="ss"
          keyboardType="numeric"
          maxLength={2}
          value={seconds}
          onChangeText={handleSecondsChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button disabled={isRunning} title="Start" onPress={handleStart} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    height: 45,
    width: 55,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
  colon: {
    fontSize: 24,
    color: "#fff",
    marginHorizontal: 5,
  },
  timerText: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default Countdown;
