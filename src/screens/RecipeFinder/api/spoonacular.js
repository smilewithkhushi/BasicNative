// api/Spoonacular.js
import axios from 'axios';

const API_KEY = 'fc304a3b4f33419f97304b735e346fa9';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: {
    apiKey: API_KEY,
  },
});

export const searchRecipes = async (query) => {
  try {
    const response = await api.get('/complexSearch', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getRecipeDetails = async (id) => {
  try {
    const response = await api.get(`/${id}/information`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
