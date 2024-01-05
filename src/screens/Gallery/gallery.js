import { StyleSheet } from "react-native";

export default function Gallery() {
    return (
        <View style={styles.container}>



            <Text style={styles.heading}>Welcome to the Calculator page! </Text>


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