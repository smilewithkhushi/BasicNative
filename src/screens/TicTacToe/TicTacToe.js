import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Snackbar } from 'react-native-paper';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Icons = ({ name }) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-o" size={50} color="#f87171" />;
    case 'cross':
      return <Icon name="times" size={50} color="#65a30d" />;
    default:
      return <Icon name="times" size={1} color="black" />;
  }
};

function TicTacToe() {
  const isDarkMode = useColorScheme() === 'dark';

  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarBackgroundColor, setSnackbarBackgroundColor] = useState('');

  const reload = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkWinner = () => {
    if (gameState[0] !== 'empty' && gameState[0] === gameState[1] && gameState[1] === gameState[2]) {
      setGameWinner(`${gameState[0]} won the game 🥳`);
    } else if (gameState[3] !== 'empty' && gameState[3] === gameState[4] && gameState[4] === gameState[5]) {
      setGameWinner(`${gameState[3]} won the game 🥳`);
    } else if (gameState[6] !== 'empty' && gameState[6] === gameState[7] && gameState[7] === gameState[8]) {
      setGameWinner(`${gameState[6]} won the game 🥳`);
    } else if (gameState[0] !== 'empty' && gameState[0] === gameState[3] && gameState[3] === gameState[6]) {
      setGameWinner(`${gameState[0]} won the game 🥳`);
    } else if (gameState[1] !== 'empty' && gameState[1] === gameState[4] && gameState[4] === gameState[7]) {
      setGameWinner(`${gameState[1]} won the game 🥳`);
    } else if (gameState[2] !== 'empty' && gameState[2] === gameState[5] && gameState[5] === gameState[8]) {
      setGameWinner(`${gameState[2]} won the game 🥳`);
    } else if (gameState[0] !== 'empty' && gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
      setGameWinner(`${gameState[0]} won the game 🥳`);
    } else if (gameState[2] !== 'empty' && gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
      setGameWinner(`${gameState[2]} won the game 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Game is draw ... 🤦‍♂️');
    }
  };

  const showSnackbar = (message, backgroundColor) => {
    setSnackbarMessage(message);
    setSnackbarBackgroundColor(backgroundColor);
    setSnackbarVisible(true);
  };

  const onBoxClick = (index) => {
    if (gameWinner) {
      showSnackbar(gameWinner, '#000');
      return;
    }

    if (gameState[index] === 'empty') {
      gameState[index] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      showSnackbar('Box is already filled', 'red');
      return;
    }
    checkWinner();
  };

  return (
    <SafeAreaView style={{ backgroundColor: isDarkMode ? '#111827' : '#64748b', height: '100%' }}>
      <StatusBar />
      <View style={[styles.titleContainer, { backgroundColor: isDarkMode ? '#64748b' : '#111827' }]}>
        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 5, color: 'white' }}>
          Let's Play
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginVertical: 10, color: 'white' }}>
          Tic Tac Toe
        </Text>
      </View>
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
          <Text style={styles.gameTurnTxt}>Player {isCross ? 'X ' : 'O '}'s turn</Text>
        </View>
      )}
      <FlatList
        numColumns={3}
        data={gameState}
        style={[styles.grid, { backgroundColor: isDarkMode ? '#64748b' : '#111827' }]}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={[styles.card, { backgroundColor: isDarkMode ? '#334155' : '#334155' }]}
            onPress={() => onBoxClick(index)}
          >
            <Icons name={item} />
          </Pressable>
        )}
      />
      <Pressable style={[styles.gameBtn, { backgroundColor: isDarkMode ? '#64748b' : '#1e293b' }]} onPress={reload}>
        <Text style={[styles.gameBtnText, { color: 'white' }]}>
          {gameWinner ? 'Start Again' : 'Reload Game'}
        </Text>
      </Pressable>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_SHORT}
        style={{ backgroundColor: snackbarBackgroundColor }}
      >
        {snackbarMessage}
      </Snackbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.6,
    marginLeft: windowWidth * 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: windowHeight * 0.05,
    paddingVertical: windowHeight * 0.02,
    marginVertical: windowHeight * 0.03,
    marginHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.04,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: windowHeight * 0.03,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#65a30d',
  },
  playerO: {
    backgroundColor: '#f87171',
  },
  grid: {
    maxHeight: windowHeight * 0.5,
    margin: windowWidth * 0.05,
    padding: windowWidth * 0.05,
    height: windowHeight * 0.5,
    borderRadius: windowWidth * 0.05,
    gap: windowWidth * 0.05,
    shadowOpacity: 0.1,
  },
  card: {
    flex: 1,
    height: windowHeight * 0.095,
    width: windowWidth * 0.1,
    borderRadius: windowWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4b5563',
    marginHorizontal: windowWidth * 0.01,
    marginVertical: windowWidth * 0.01,
  },
  winnerInfo: {
    width: windowWidth * 0.7,
    height: windowHeight * 0.09,
    marginLeft: windowWidth * 0.15,
    borderRadius: windowWidth * 0.18,
    backgroundColor: '#14532d',
    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: windowHeight * 0.025,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    marginBottom: windowHeight * 0.08,
    height: windowHeight * 0.06,
    marginTop: windowHeight * 0.04,
    padding: windowWidth * 0.03,
    width: windowWidth * 0.4,
    marginLeft: windowWidth * 0.3,
    marginHorizontal: windowWidth * 0.25,
    borderRadius: windowWidth * 0.02,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: windowHeight * 0.025,
    marginTop: windowHeight * 0.001,
    fontWeight: '500',
  },
  titleContainer: {
    margin: windowWidth * 0.03,
    padding: windowWidth * 0.03,
    borderRadius: windowWidth * 0.05,
    shadowOpacity: 0.1,
  },
});

export default TicTacToe;
