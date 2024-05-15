import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const MovieFinder = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) {
      setError('Please enter a search term');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://www.omdbapi.com/', {
        params: {
          apikey: '680122b6',
          s: searchTerm,
        },
      });

      if (response.data.Response === "True") {
        const movieList = response.data.Search;
        const detailedMovies = await Promise.all(movieList.map(async movie => {
          const detailedResponse = await axios.get('http://www.omdbapi.com/', {
            params: {
              apikey: '680122b6',
              i: movie.imdbID,
              plot: 'full',
            },
          });
          return detailedResponse.data;
        }));
        setMovies(detailedMovies);
      } else {
        setError('No movies found');
        setMovies([]);
      }
    } catch (error) {
      setError('Error fetching movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} color="#600047" />

      {loading && <ActivityIndicator style={styles.loadingIndicator} />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <View style={styles.movieDetails}>
              <Text style={styles.title}>{item.Title}</Text>
              <Text style={styles.plot}>{item.Plot}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Cast:</Text> {item.Actors}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Genre:</Text> {item.Genre}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Director:</Text> {item.Director}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Language:</Text> {item.Language}</Text>
              <Text style={styles.detail}><Text style={styles.bold}>Released:</Text> {item.Released}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius:15
  },
  loadingIndicator: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
  movieContainer: {
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  poster: {
    width: 300,
    height: 300,
    marginRight: 10,
    marginTop:20,
    marginBottom:10,
    
  },
  movieDetails: {
    flex: 1,
    justifyContent:'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center', 
    textTransform: 'uppercase',
  },
  
  plot: {
    marginBottom: 5,
  },
  detail: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default MovieFinder;
