import { StyleSheet, View, Text, StatusBar, TouchableHighlight, TouchableOpacity, Image, Pressable, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function DayOne() {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>

                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1535837487710-a191373a20ae?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    style={{ width: 400, height: 250, marginBottom: 10, }}
                />

                <Text style={styles.heading}>Hi, Welcome to Day 1 Learnings! </Text>

                <StatusBar style="auto" />

                <View style={styles.list}>

                    <TouchableHighlight>
                        <Text style={styles.items}>Displaying Touchable Highlight</Text>
                    </TouchableHighlight>

                    <Pressable>
                        <Text style={styles.items}>Pressable Text</Text>
                    </Pressable>

                    <TouchableOpacity>
                        <Text style={styles.items}>Displaying Touchable Opacity</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.btngrid}>
                    <Text style={styles.button} title="Alert Button" onPress={(() => {
                        Alert.alert("Alert Buttosn is pressed!")

                    })}>Alert Button</Text>

                    <Text style={styles.button} title="Home Screen" onPress={(() => {
                        console.log("Button to Home Screen is Pressed!")
                        navigation.navigate("Home")
                    })}>Home Screen</Text>

                    <Text style={styles.button} title="Calculator" onPress={(() => {
                        console.log("Button to Calculator Screen is Pressed!")
                        navigation.navigate("Calculator")
                    })}>Calculator</Text>
                </View>

                <Text style={{ padding: 4, marginTop: 16, fontSize: 20, color: '#E2294F', fontWeight: "bold", }}> Press the buttons to change the count! </Text>
                <Text style={styles.heading}>Count : {count}</Text>

                <View style={styles.btngrid}>
                    <Button title="Increment" style={{ padding: 6, }} onPress={() => { setCount(count + 1) }} />
                    <Button title="Decrement" style={{ padding: 6, }} onPress={() => { setCount(count - 1) }} />
                </View>

            </View>
        </ScrollView>
    );

}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
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
        margin: 20,
        width: 400,

    },

    list: {
        flex: 0,
        flexDirection: 'column',
        width: 380,
        paddingHorizontal: 20,
        margin: 10,
    },

    items: {
        margin: 2,
        fontSize: 16,
    }
});

