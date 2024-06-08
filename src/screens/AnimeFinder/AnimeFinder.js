import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';

const AnimeFinder = () => {
  const [searchInput, setSearchInput] = useState('');
  const [animeResults, setAnimeResults] = useState([]);
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
        setNoResultsMessage('No anime found with this name');
      } else {
        setNoResultsMessage('');
      }

      setAnimeResults(animeList);
    } catch (error) {
      console.error('Error:', error);
      setNoResultsMessage('An error occurred while fetching data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anime Search</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for anime..."
        value={searchInput}
        onChangeText={setSearchInput}
      />
      <Button title="Search" onPress={searchAnime} />
      <ScrollView style={styles.results}>
        {noResultsMessage ? (
          <Text style={styles.noResults}>{noResultsMessage}</Text>
        ) : (
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
                  source={{ uri: anime.coverImage.medium }}
                />
              )}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 10,
  },
  results: {
    marginTop: 20,
  },
  noResults: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  animeCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  animeTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  animeDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  animeScore: {
    fontSize: 16,
    marginBottom: 10,
  },
  animeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default AnimeFinder;
