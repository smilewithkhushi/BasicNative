// screens/FavoritesScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { FavoritesContext } from '../context/favourite-context';

const FavoritesScreen = ({ navigation }) => {
  const favCtx = useContext(FavoritesContext);
  const favourites = favCtx.favorites;

  const handleRemoveFavorite = (id) => {
    favCtx.removeFavorite(id);
  };

  return (
    <View style={styles.container}>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { id: item.id })}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.duration}>Duration: {item.readyInMinutes} minutes</Text>
              <Button title="Remove from Favorites" onPress={() => handleRemoveFavorite(item.id)} color="#f50892" />
            </View>
          )}
        />
      ) : (
        <View style={styles.noFavoritesContainer}>
          <Text style={styles.noFavoritesText}>No Favorites Added</Text>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  duration: {
    fontSize: 14,
    marginBottom: 10,
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    color: '#999',
  },
});
