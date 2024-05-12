import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Alert, Text, StatusBar, Image } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1573456170607-b885fdc78985?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{ width: 400, height: 250, marginBottom: 10 }}
        />

        <Text style={styles.heading}>
          Welcome to the hub of React Native Applications : )
        </Text>

        <StatusBar style="auto" animated />

        <View style={styles.btngrid}>
          <Pressable>
            {/* <Text style={styles.button} onPress={(() => {
              console.log("Button to Home Screen is Pressed!")
              navigation.navigate("Home")
            })}>Home Screen</Text> */}

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Day 1 is pressed!");
                navigation.navigate("Basic Components");
              }}
            >
              Basic Components
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Image Gallery is Pressed!");
                navigation.navigate("Image Gallery");
              }}
            >
              {" "}
              Image Gallery
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Rock Paper Scissors Game is Pressed!");
                navigation.navigate("Rock Paper Scissors Game");
              }}
            >
              {" "}
              Rock Paper Scissors Game
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Book Finder is Pressed!");
                navigation.navigate("Book Finder");
              }}
            >
              {" "}
              Book Finder
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Calculator is Pressed!");
                navigation.navigate("Calculator");
              }}
            >
              Calculator
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,7,20,1) 4%, rgba(27,57,144,0.9809173669467787) 35%, rgba(0,212,255,1) 100%)",
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    width: 230,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#9989D1",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  gradient: {
    borderRadius: 10,
  },
  heading: {
    color: "#624CAB",
    fontWeight: "bold",
    fontSize: 22,
    padding: 8,
    textAlign: "center",
  },
  btngrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
