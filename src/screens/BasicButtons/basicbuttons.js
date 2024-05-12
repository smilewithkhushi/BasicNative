import React, { useState , useContext} from "react";
import { StyleSheet, View, Text, StatusBar, Pressable, Button, ScrollView, Image, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { EventRegister } from 'react-native-event-listeners'
import themeContext from "../../Themes/ThemeProvider";



export default function DayOne() {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    const theme = useContext(themeContext);
    const [darkMode, setDarkMode]=useState(false);

    return (
        <View  style={{backgroundColor:theme.backgroundColor}}>
        <ScrollView>
            <View style={styles.container}>

                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1535837487710-a191373a20ae?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={styles.image}
                />

                <Text style={[styles.heading, {color:theme.color}]}>Basic Components, Text and Buttons </Text>

                <StatusBar style="auto" />

                <View style={styles.list}>
                    <Pressable>
                        <Text style={[styles.items, {color:theme.color}]}>Pressable Text</Text>
                    </Pressable>

                    <Pressable>
                        <Text style={[styles.items, {color:theme.color}]}>Displaying Touchable Opacity</Text>
                    </Pressable>
                </View>

                <View style={styles.btngrid}>
                    <Text style={styles.button} title="Alert Button" onPress={(() => {
                        Alert.alert("Alert Button is pressed!")

                    })}>Alert Button</Text>

                    <Text style={styles.button} title="Home Screen" onPress={(() => {
                        console.log("Button to Home Screen is Pressed!")
                        navigation.navigate("Home")
                    })}>Home Screen</Text>
                </View>

                <Text style={styles.infoText}>Press the buttons to change the count!</Text>
                <Text style={[styles.heading, {color:theme.color}]}>Count : {count}</Text>

                <View style={styles.btngrid}>
                    <Button title="Increment" onPress={() => setCount(count + 1)} />
                    <Button title="Decrement" onPress={() => setCount(count - 1)} />

                    
                </View>
                
                
            </View>
            
        </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        
    },
    image: {
        width: 400,
        height: 250,
        marginBottom: 10,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#600047',
        textAlign: 'center',
        paddingVertical: 8,
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    items: {
        fontSize: 16,
        marginVertical: 2,
    },
    btngrid: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 20,
    },
    infoText: {
        fontSize: 20,
        color: '#E2294F',
        fontWeight: 'bold',
        marginTop: 16,
        padding: 4,
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        margin: 8,
        width: 200,
        paddingHorizontal: 20,
        paddingVertical: 14,
        fontSize: 16,
        borderColor: '#ed6872',
        color: '#fff',
        borderRadius: 10,
        backgroundColor: '#600047',
        shadowColor: '#ed6872',
    },
    toggleButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'flex-end',
        marginRight: 20,
      },
      toggleText: {
        color: 'black',
        fontSize: 16,
      },
    
});
