import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const workoutImage = require('../../images/workout.webp'); // Your workout image file path

const AddWorkout = ({ navigation }) => {
  const [type, setType] = useState(null);
  const [customType, setCustomType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [open, setOpen] = useState(false);

  const items = [
    { label: 'Running', value: 'Running' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Custom', value: 'Custom' },
  ];

  const handleAddWorkout = async () => {
    const workoutType = isCustom ? customType : type;
    const newWorkout = { type: workoutType, duration, calories };

    try {
      const storedWorkouts = await AsyncStorage.getItem('workouts');
      const workouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
      workouts.push(newWorkout);
      await AsyncStorage.setItem('workouts', JSON.stringify(workouts));
      console.log('Workout Added:', newWorkout);
      navigation.navigate('Workout Overview'); // Navigate to WorkoutOverview screen
    } catch (error) {
      console.error('Error saving workout:', error);
    }
  };

  const handleWorkoutTypeChange = (value) => {
    setType(value);
    setIsCustom(value === 'Custom');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      {/* Workout Image Section */}
      <View style={styles.imageContainer}>
        <Image source={workoutImage} style={styles.image} />
      </View>

      {/* Add Workout Form Section */}
      <View style={styles.addWorkoutForm}>
        <Text style={styles.title}>ADD WORKOUT</Text>
        <Text style={styles.label}>Select Workout Type:</Text>
        <DropDownPicker
          open={open}
          value={type}
          items={items}
          setOpen={setOpen}
          setValue={setType}
          setItems={setType}
          onChangeValue={(value) => handleWorkoutTypeChange(value)}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdown}
        />
        {isCustom && (
          <TextInput
            placeholder="Enter Custom Workout Name"
            value={customType}
            onChangeText={setCustomType}
            style={styles.input}
            keyboardType="default"
          />
        )}
        <TextInput
          placeholder="Duration (mins)"
          value={duration}
          onChangeText={setDuration}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Calories Burned"
          value={calories}
          onChangeText={setCalories}
          style={styles.input}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Workout" onPress={handleAddWorkout} color="#007AFF" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 20,
    
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  addWorkoutForm: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textDecorationLine: 'underline',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    height: 40,
    width: '100%',
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default AddWorkout;
