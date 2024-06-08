import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const AnimeFinder = () => {
  const [searchInput, setSearchInput] = useState(''); // State for search input
  const [animeResults, setAnimeResults] = useState([]); // State for storing search results
  const [noResultsMessage, setNoResultsMessage] = useState(''); 

  const searchAnime = async () => {
    const query = `
      query ($title: String) {
        Page {
          media (search: $title, type: ANIME) {
            id
            title {
              romaji
              english
              native
            }
            description
            averageScore
            coverImage {
              large
              medium
            }
          }
        }
      }
    `;

    try {
      const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { title: searchInput },
        }),
      });

      const responseData = await response.json();
      const animeList = responseData.data.Page.media;

      if (animeList.length === 0) {
        setNoResultsMessage('No anime found with this name'); // Set message if no results
      } else {
        setNoResultsMessage(''); // Clear message if there are results
      }

      setAnimeResults(animeList); // Update the anime results
    } catch (error) {
      console.error('Error:', error);
      setNoResultsMessage('An error occurred while fetching data.'); // Set error message
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, animeResults.length === 0 && styles.centered]}>
        <Text style={styles.title}>Anime Search</Text>
        <View style={[styles.searchContainer, animeResults.length === 0 && styles.centeredSearch]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for anime..."
            placeholderTextColor="#999"
            value={searchInput}
            onChangeText={setSearchInput} // Update search input state on text change
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchAnime}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      {animeResults.length > 0 ? (
        <ScrollView style={styles.results}>
          { 
            animeResults.map(anime => (
              <View key={anime.id} style={styles.animeCard}>
                <Text style={styles.animeTitle}>
                  {anime.title.romaji || anime.title.english || anime.title.native}
                </Text>

                <Text style={styles.animeDescription}>
                  {anime.description.replace(/<br>/g, '\n')} 
                </Text>
                <Text style={styles.animeScore}>
                  Average Score: {anime.averageScore} 
                </Text>
                {anime.coverImage && anime.coverImage.medium && (
                  <Image
                    style={styles.animeImage}
                    source={{ uri: anime.coverImage.medium }} // Display anime cover image
                  />
                )}
              </View>
            ))
          }
        </ScrollView>
      ) : // Error if the anime name entered is incorrect
      <Text style={styles.noResults}>{noResultsMessage}</Text>
}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background color
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center elements vertically and horizontally
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center', // Center text
  },
  searchContainer: {
    marginBottom: 20,
    width: '100%', // Ensure search container takes full width
    alignItems: 'center',
  },
  centeredSearch: {
    alignItems: 'stretch',
    width: '100%', // Ensure search input and button take full width
  },
  searchInput: {
    padding: 10,
    paddingLeft:20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 25,
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    backgroundColor: '#1e1e1e', // Darker background for input
    shadowColor: '#00ff99',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  searchButton: {
    backgroundColor: '#00ff99', // Neon green background for button
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#00ff99',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  searchButtonText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
  },
  results: {
    marginTop: 20,
  },
  noResults: {
    fontSize: 18,
    color: '#ff6666', // Red color for no results message
    textAlign: 'center',
    marginTop: 20,
  },
  animeCard: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#1e1e1e', // Dark background for anime card
    shadowColor: '#00ff99',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  animeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00ff99', // Neon green for anime title
  },
  animeDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#ccc', // Light gray for description
  },
  animeScore: {
    fontSize: 16,
    marginBottom: 10,
    color: '#00ff99', // Neon green for score
  },
  animeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
    marginTop: 10,
  },
});

export default AnimeFinder;
