import { StyleSheet, Text, View, TouchableOpacity, Slider } from "react-native";
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av'; 

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [volume, setVolume] = useState(1.0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  
  const tracks = [
    { title: 'Track 1', file: require('./assets/song1.mp3') },
    { title: 'Track 2', file: require('./assets/song2.mp3') },
    { title: 'Track 3', file: require('./assets/song3.mp3') }
  ];

  
  const loadTrack = async (index) => {
    const { sound } = await Audio.Sound.createAsync(tracks[index].file);
    setSound(sound);
    setCurrentTrackIndex(index);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setPosition(status.positionMillis);
        setDuration(status.durationMillis);
      }
      if (status.didJustFinish) {
        nextTrack(); 
      }
    });

    await sound.playAsync();
    setIsPlaying(true);
  };

  
  const handlePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
    } else {
      await loadTrack(currentTrackIndex);
    }
  };

 
  const handleStop = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setPosition(0);
    }
  };

  k
  const nextTrack = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    await loadTrack(nextIndex);
  };

  
  const previousTrack = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    await loadTrack(prevIndex);
  };

  
  const handleSeek = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  
  const handleVolumeChange = async (value) => {
    setVolume(value);
    if (sound) {
      await sound.setVolumeAsync(value);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync(); 
      }
    };
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tracks[currentTrackIndex].title}</Text>

      <View style={styles.controls}>
        <TouchableOpacity onPress={previousTrack} style={styles.button}>
          <Text>{"<<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePlayPause} style={styles.button}>
          <Text>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextTrack} style={styles.button}>
          <Text>{">>"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={position}
          minimumValue={0}
          maximumValue={duration}
          onSlidingComplete={handleSeek}
        />
        <Text style={styles.time}>
          {Math.floor(position / 1000)}s / {Math.floor(duration / 1000)}s
        </Text>
      </View>

      <View style={styles.volumeContainer}>
        <Text>Volume</Text>
        <Slider
          style={styles.volumeSlider}
          value={volume}
          minimumValue={0}
          maximumValue={1}
          onValueChange={handleVolumeChange}
        />
      </View>

      <TouchableOpacity onPress={handleStop} style={styles.stopButton}>
        <Text>Stop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 15,
    borderRadius: 50,
    margin: 10,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    width: '80%',
    marginVertical: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  time: {
    textAlign: 'center',
    marginTop: 10,
  },
  volumeContainer: {
    width: '80%',
    marginVertical: 10,
  },
  volumeSlider: {
    width: '100%',
    height: 40,
  },
  stopButton: {
    backgroundColor: '#FF5555',
    padding: 15,
    borderRadius: 50,
    margin: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
