import React, { useState, useEffect, useRef, memo } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

// Memoized component for rendering each lap item
const LapItem = memo(({ item, index, formatTime }) => {
  return (
    <Text key={index} style={styles.lapText}>
      Lap {index + 1}: {formatTime(item)}
    </Text>
  );
});

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);
  const lastLapTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      // Start interval to increment time every 10 milliseconds
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      // Clear interval when stopwatch is stopped
      clearInterval(intervalRef.current);
    }
    // Cleanup function to clear interval on component unmount or isRunning state change
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    const now = Date.now();
    if (now - lastLapTimeRef.current > 100) {
      setLaps((prevLaps) => [...prevLaps, time]);
      lastLapTimeRef.current = now;
    }
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={isRunning ? "red" : ""}
          title={isRunning ? "Stop" : "Start"}
          onPress={handleStartStop}
        />
        <Button title="Lap" onPress={handleLap} disabled={!isRunning} />
        <Button title="Reset" onPress={handleReset} />
      </View>
      <FlatList
        data={laps}
        renderItem={({ item, index }) => (
          <LapItem item={item} index={index} formatTime={formatTime} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={laps.length === 0 && styles.emptyLapList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  timerText: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 20,
  },
  lapText: {
    fontSize: 18,
    paddingVertical: 5,
    color: "#fff",
  },
  emptyLapList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StopWatch;
