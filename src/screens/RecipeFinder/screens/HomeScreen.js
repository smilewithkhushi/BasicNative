// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity,StyleSheet,Image} from 'react-native';
import { searchRecipes } from '../api/spoonacular';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState(''); // State for the search query input
  const [recipes, setRecipes] = useState([]); // State for storing the search results

  // Function to handle the search action
  const handleSearch = async () => {
    const results = await searchRecipes(query); // Call the API to search for recipes
    setRecipes(results); // Update the recipes state with the search results
  };

  return (
    <View style={styles.container}>
      {/* TextInput for entering the search query */}
      <TextInput
        placeholder="Search for a recipe"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <View style={styles.button}>
        {/* Button to trigger the search */}
        <Button title="Search" onPress={handleSearch} color="#f50892" />
      </View>
      {/* FlatList to display the search results */}
      <FlatList
        data={recipes} // Data to be rendered
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        renderItem={({ item }) => (
          // TouchableOpacity to navigate to the RecipeDetail screen on press
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { id: item.id })} style={styles.recipeContainer}>
            {/* Display recipe image */}
            <Image source={{ uri: item.image }} style={styles.image} />
            {/* Display recipe title */}
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

//Styles for HomeScreen

const styles=StyleSheet.create({
 container:{
    flex:1,
},
input:{
   marginVertical:20,
   padding:10,
   borderWidth:4,
   borderColor:"#ef0b90",
   marginHorizontal:10
},
button:{
    marginHorizontal:10,
    marginBottom:10,
    padding:5
},
image:{
    width:350,
    height:350,
    borderRadius:10,
    marginBottom:8
},
text:{
    fontSize:20,
    textAlign:"center",
    color:"#510431"
},
recipeContainer:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10,
    marginHorizontal:10,
}
})