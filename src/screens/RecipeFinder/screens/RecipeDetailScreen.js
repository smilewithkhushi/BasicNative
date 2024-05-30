// screens/RecipeDetailScreen.js
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';
// Import the function to fetch recipe details from the API
import { getRecipeDetails } from '../api/spoonacular'; 
// Import the Favorites context
import { FavoritesContext } from '../context/favourite-context'; 
import RecipeInfo from '../components/RecipeInfo'; 
import List from '../components/List'; 
import Subtitle from '../components/Subtitle'; 

const RecipeDetailScreen = ({ route, navigation }) => {
  // Accessing the Favorites context
  const favCtx = useContext(FavoritesContext); 
  // State to hold the recipe details
  const [recipe, setRecipe] = useState(null); 
  // Get the recipe ID from route parameters
  const { id: recipeId } = route.params; 

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const details = await getRecipeDetails(recipeId); // Fetch recipe details from the API
      setRecipe(details); // Set the recipe state with the fetched details
      navigation.setOptions({ title: details.title }); // Set the navigation title to the recipe title
    };
    fetchRecipeDetails();
  }, [recipeId]); // Re-run the effect when recipeId changes

  // If the recipe details are not yet fetched, show a loading text
  if (!recipe) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.recipeContainer}>
        {/* Display the recipe image */}
        <Image source={{ uri: recipe.image }} style={styles.imageStyle} />
        {/* Display the recipe title */}
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        {/* Display the recipe information */}
        <RecipeInfo
          duration={recipe.readyInMinutes}
          complexity={recipe.dishTypes.join(', ')}
        />
      </View>
      <View>
        {/* Display the ingredients section */}
        <Subtitle>Ingredients</Subtitle>
        <List data={recipe.extendedIngredients.map(ingredient => ingredient.original)} />
        {/* Display the steps section */}
        <Subtitle>Steps</Subtitle>
        <List data={recipe.analyzedInstructions[0]?.steps.map(step => step.step)} />
      </View>
      <View style={styles.button}>
        {/* Button to add the recipe to favorites */}
        <Button title="Add to Favorites" onPress={() => favCtx.addFavorite(recipe)} color="#f50892" />
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

// Styles for the RecipeDetailScreen component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recipeContainer: {
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
