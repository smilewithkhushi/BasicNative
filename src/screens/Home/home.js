import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
{/* 
      <Image
        source={require('.../assets/nature1.jpg')}
        style={{ width: 500, height: 280, marginBottom: 10, }}
      /> */}

      <Text style={styles.heading}>Welcome to my first React Native App :) </Text>

      <StatusBar style="auto" />

      <View style={styles.btngrid}>


        <Text style={styles.button} onPress={(() => {
          console.log("Button to Home Screen is Pressed!")
          navigation.navigate("Home")
        })}>Home Screen</Text>

        <Text style={styles.button} onPress={(() => {
          Alert.alert("Button to Day 1 is pressed!")
          navigation.navigate("DayOne")
        })}>Day 1 Learnings</Text>

        <Text style={styles.button} onPress={(() => {
          console.log("Button to Day 2 learnings is Pressed!")
          navigation.navigate("")
        })}>Day 2 Learnings</Text>

        <Text style={styles.button} onPress={(() => {
          console.log("Button to Image Gallery is Pressed!")
          navigation.navigate("Gallery")
        })}>Image Gallery</Text>

        <Text style={styles.button} onPress={(() => {
          console.log("Button to Calculator is Pressed!")
          navigation.navigate("Calculator")
        })}>Calculator</Text>
      </View>

    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  button: {
    textAlign: 'center',
    margin: 8,
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
    borderColor: '#ed6872',
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#600047',
    shadowColor: '#ed6872',
  },
  heading: {
    color: '#600047',
    fontWeight: "bold",
    fontSize: 22,
    padding: 8,
    textAlign: 'center',
  },

  btngrid: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    width: 400,

  },
});

