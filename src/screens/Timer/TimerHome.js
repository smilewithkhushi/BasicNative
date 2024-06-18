import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import StopWatch from "./StopWatch";
import Countdown from "./CountDown";
import AnalogClock from "./AnalogClock";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"; // Import icons from react-native-vector-icons

const TimerHome = () => {
  // State to track currently selected component
  const [selectedComponent, setSelectedComponent] = useState("clock");
  const opacity = useRef(new Animated.Value(1)).current;

  const renderComponent = () => {
    if (selectedComponent === "clock") {
      return <AnalogClock />;
    } else if (selectedComponent === "countdown") {
      return <Countdown />;
    } else if (selectedComponent === "timer") {
      return <StopWatch />;
    }
  };

  // Handle swipe gesture to switch between components
  const handleSwipe = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { translationX } = event.nativeEvent;
      if (translationX < -50) {
        // Swiped left
        if (selectedComponent === "clock") {
          setSelectedComponent("countdown");
        } else if (selectedComponent === "countdown") {
          setSelectedComponent("timer");
        }
      } else if (translationX > 50) {
        // Swiped right
        if (selectedComponent === "timer") {
          setSelectedComponent("countdown");
        } else if (selectedComponent === "countdown") {
          setSelectedComponent("clock");
        }
      }
    }
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const switchComponent = (newComponent) => {
    fadeOut();
    setTimeout(() => {
      setSelectedComponent(newComponent);
      fadeIn();
    }, 300);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler onHandlerStateChange={handleSwipe}>
        <Animated.View style={[styles.contentContainer, { opacity }]}>
          {renderComponent()}
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedComponent === "clock" && styles.selectedNavButton,
          ]}
          onPress={() => switchComponent("clock")}
        >
          <View style={styles.iconTextContainer}>
            <Icon name="clock-o" size={24} color="#fff" />
            <Text style={styles.navButtonText}>Clock</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedComponent === "countdown" && styles.selectedNavButton,
          ]}
          onPress={() => switchComponent("countdown")}
        >
          <View style={styles.iconTextContainer}>
            <Icon name="hourglass" size={24} color="#fff" />
            <Text style={styles.navButtonText}>Countdown</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navButton,
            selectedComponent === "timer" && styles.selectedNavButton,
          ]}
          onPress={() => switchComponent("timer")}
        >
          <View style={styles.iconTextContainer}>
            <Icon name="hourglass-end" size={24} color="#fff" />
            <Text style={styles.navButtonText}>Stopwatch</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2c3e50",
    paddingVertical: 10,
  },
  navButton: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  selectedNavButton: {
    backgroundColor: "#34495e",
  },
  iconTextContainer: {
    alignItems: "center",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 9,
    marginTop: 5,
  },
});

export default TimerHome;
