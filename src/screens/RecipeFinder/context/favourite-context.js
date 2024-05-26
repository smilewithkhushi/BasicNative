// context/FavoritesContext.js
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    favorites:[],
    addFavorite:()=>{},
    removeFavorite:()=>{}
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (recipe) => {
    // Check if the recipe already exists in the favorites
    const alreadyExists = favorites.some(fav => fav.id === recipe.id);
    if (!alreadyExists) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (recipeId) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== recipeId));
  };
  const value={
    favorites:favorites,
    addFavorite:addFavorite,
    removeFavorite:removeFavorite
  }
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
