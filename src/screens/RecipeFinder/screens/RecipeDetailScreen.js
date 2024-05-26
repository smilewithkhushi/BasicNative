// screens/RecipeDetailScreen.js
import React, { useEffect, useState, useContext,useLayoutEffect } from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';
import { getRecipeDetails } from '../api/spoonacular';
import { FavoritesContext } from '../context/favourite-context';
import RecipeInfo from '../component/RecipeInfo';
import List from '../component/List';
import Subtitle from '../component/Subtitle';
const RecipeDetailScreen = ({ route, navigation }) => {
  const favCtx = useContext(FavoritesContext);
  const [recipe, setRecipe] = useState(null);
  const { id: recipeId } = route.params;

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const details = await getRecipeDetails(recipeId);
      setRecipe(details);
      navigation.setOptions({ title: details.title,});
    };
    fetchRecipeDetails();
  }, [recipeId]);
  if (!recipe) return <Text>Loading...</Text>;
 
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.recipeContainer}>
        <Image source={{ uri: recipe.image }} style={styles.imageStyle} />
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        <RecipeInfo
          duration={recipe.readyInMinutes}
          complexity={recipe.dishTypes.join(', ')}
        />
      </View>
      <View>
        <Subtitle>Ingredients</Subtitle>
        <List data={recipe.extendedIngredients.map(ingredient => ingredient.original)} />
        <Subtitle>Steps</Subtitle>
        <List data={recipe.analyzedInstructions[0]?.steps.map(step => step.step)} />
      </View>
      <View style={styles.button}>
      <Button title="Add to Favorites" onPress={() => favCtx.addFavorite(recipe)}  color="#f50892"/>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recipeContainer: {
    marginTop:10,
    alignItems: 'center',
    marginHorizontal:10
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius:5,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  button:{
    marginBottom:10,
    marginHorizontal:10
  }
});
