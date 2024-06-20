import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const CodingQuiz = () => {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // Assuming a 10-second timer for each question
  const [isTimerActive, setIsTimerActive] = useState(true); // Timer should start initially
  const [quizOver, setQuizOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timerRef = useRef(null); // Ref to hold the timer interval

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple'); // Adjusted to get multiple choice questions
        const data = await response.json();
        setQuestions(data.results);
      } catch (err) {
        setError('Failed to load questions.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (isTimerActive) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(timerRef.current);
            handleNextQuestion();
            return 10; // Reset timer
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [isTimerActive]);

  useEffect(() => {
    if (!quizOver) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimer(10);
      setIsTimerActive(true);
    }
  }, [quizOver]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(10); // Reset timer for the next question
      setIsTimerActive(true); // Restart the timer
    } else {
      // Quiz is over
      setQuizOver(true);
      setIsTimerActive(false);
    }
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  const handleQuizOver = () => {
    // Display alert with score and option to go home
    Alert.alert(
      'Quiz Over!',
      `Your score is ${score}`,
      [
        {
          text: 'Go Home',
          onPress: handleGoHome,
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    if (quizOver) {
      handleQuizOver();
    }
  }, [quizOver]);

  useEffect(() => {
    if (timer === 0 && isTimerActive) {
      // Timer is over
      setIsTimerActive(false);
      handleQuizOver();
    }
  }, [timer, isTimerActive]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (questions.length === 0) {
    return <Text>No questions available</Text>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Score: </Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Time: </Text>
          <Text style={styles.timerValue}>{timer}</Text>
        </View>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        {options.map((option, index) => (
          <View key={index} style={styles.buttonContainer}>
            <Button
              title={option}
              onPress={() => handleAnswer(option === currentQuestion.correct_answer)}
              color="#4CAF50" // Green buttons
            />
          </View>
        ))}
      </View>
      <View style={styles.bottomBar}>
        <Button title="Go Home" onPress={handleGoHome} color="#FF5722" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    color: '#3F51B5',
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F51B5',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 18,
    color: '#FF5722',
  },
  timerValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 8,
    width: '80%',
  },
  bottomBar: {
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
  },
});

export default CodingQuiz;
