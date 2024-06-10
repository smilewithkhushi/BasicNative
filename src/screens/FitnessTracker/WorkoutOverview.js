import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const workoutImage = require('../../images/workout_list.jpg'); // Your workout image file path

const WorkoutOverview = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem('workouts');
        if (storedWorkouts) {
          setWorkouts(JSON.parse(storedWorkouts));
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      {/* Workout Image Section */}
      <View style={styles.imageContainer}>
        <Image source={workoutImage} style={styles.image} />
      </View>

      {/* Workouts List Section */}
      <View style={styles.workoutsList}>
        <Text style={styles.title}>WORKOUTS LIST</Text>
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.workoutItem}>
              <Text style={styles.workoutType}>TYPE: {item.type}</Text>
              <Text style={styles.workoutDetail}>Duration: {item.duration} mins</Text>
              <Text style={styles.workoutDetail}>Calories Burned: {item.calories}</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyListComponent}>
              <Text style={styles.emptyListText}>No workouts recorded yet.</Text>
            </View>
          )}
        />
        <Button
          title="Add Workout"
          onPress={() => navigation.navigate('Add Workout')}
          color="#007AFF"
          style={styles.addButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  workoutsList: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  workoutItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  workoutType: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform:'uppercase'
  },
  workoutDetail: {
    fontSize: 16,
    color: '#555',
  },
  emptyListComponent: {
    marginTop: 20,
    alignItems: 'center',
  },
  emptyListText: {
    fontSize: 16,
    color: '#777',
  },
  addButton: {
    marginTop: 20,
  },
});

export default WorkoutOverview;
