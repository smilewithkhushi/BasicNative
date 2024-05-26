// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity,StyleSheet,Image} from 'react-native';
import { searchRecipes } from '../api/spoonacular';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    const results = await searchRecipes(query);
    //console.log(results)
    setRecipes(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for a recipe"
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <View style={styles.button}>
      <Button title="Search" onPress={handleSearch}  color="#f50892"/>
      </View>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { id: item.id })} style={styles.recipeContainer}>
            <Image source={{uri:item.image}} style={styles.image}/>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

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