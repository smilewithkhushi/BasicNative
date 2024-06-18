import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

const AnalogClock = () => {
  // State to hold current date and time
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Dimensions and center coordinates of the clock
  const radius = Dimensions.get("window").width / 2 - 20; // Radius of the clock
  const center = {
    x: Dimensions.get("window").width / 2,
    y: Dimensions.get("window").height / 2,
  };

  // Calculate angles for second, minute, and hour hands
  const secondAngle = (date.getSeconds() / 60) * 360;
  const minuteAngle =
    (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6;
  const hourAngle =
    ((date.getHours() % 12) / 12) * 360 + (date.getMinutes() / 60) * 30;

  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const secondHand = {
    x1: center.x,
    y1: center.y,
    x2: center.x + radius * 0.9 * Math.cos(toRadians(secondAngle - 90)),
    y2: center.y + radius * 0.9 * Math.sin(toRadians(secondAngle - 90)),
  };

  const minuteHand = {
    x1: center.x,
    y1: center.y,
    x2: center.x + radius * 0.75 * Math.cos(toRadians(minuteAngle - 90)),
    y2: center.y + radius * 0.75 * Math.sin(toRadians(minuteAngle - 90)),
  };

  const hourHand = {
    x1: center.x,
    y1: center.y,
    x2: center.x + radius * 0.5 * Math.cos(toRadians(hourAngle - 90)),
    y2: center.y + radius * 0.5 * Math.sin(toRadians(hourAngle - 90)),
  };

  // Format time to HH:mm:ss
  const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Svg
        height={Dimensions.get("window").height}
        width={Dimensions.get("window").width}
      >
        {/* Draw clock face */}
        <Circle
          cx={center.x}
          cy={center.y}
          r={radius}
          stroke="#34495e"
          strokeWidth="4"
          fill="whitesmoke"
        />

        {/* Second hand */}
        <Line
          x1={secondHand.x1}
          y1={secondHand.y1}
          x2={secondHand.x2}
          y2={secondHand.y2}
          stroke="#e74c3c"
          strokeWidth="2"
        />

        {/* Minute hand */}
        <Line
          x1={minuteHand.x1}
          y1={minuteHand.y1}
          x2={minuteHand.x2}
          y2={minuteHand.y2}
          stroke="#2980b9"
          strokeWidth="4"
        />

        {/* Hour hand */}
        <Line
          x1={hourHand.x1}
          y1={hourHand.y1}
          x2={hourHand.x2}
          y2={hourHand.y2}
          stroke="#2c3e50"
          strokeWidth="6"
        />
      </Svg>
      <Text style={styles.digitalTime}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  digitalTime: {
    fontSize: 45,
    margin: 40,
    fontWeight: "bold",
    position: "absolute",
    color: "whitesmoke",
    top: 20,
  },
});

export default AnalogClock;
