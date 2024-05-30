// api/Spoonacular.js
import axios from 'axios';

// Spoonacular API key (replace with your own API key)
const API_KEY = 'fc304a3b4f33419f97304b735e346fa9';

// Creating an axios instance with the base URL for the Spoonacular API
const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: API_KEY,
  },
});


 // Searches for recipes based on a query string.
 
export const searchRecipes = async (query) => {
  try {
    // Make a GET request to the /complexSearch endpoint with the query string
    const response = await api.get('/complexSearch', {
      params: { query },
    });
    // Return the results array from the response data
    return response.data.results;
  } catch (error) {
    // Log any errors to the console and return an empty array
    console.error(error);
    return [];
  }
};

// Get complete details of particular recipe by passing id of recipe

export const getRecipeDetails = async (id) => {
  try {
    // Make a GET request to the /{id}/information endpoint to get detailed information about the recipe
    const response = await api.get(`/${id}/information`);
    // Return the data object from the response
    return response.data;
  } catch (error) {
    // Log any errors to the console and return null
    console.error(error);
    return null;
  }
};
