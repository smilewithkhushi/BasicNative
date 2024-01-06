import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';


export default function RPSGame() {

    //setting useState() for score and chances
    const [chances, setChances] = useState(3);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [showModal, setShowModal] = useState(false);

    //selection choices 
    const choices = ['rock', 'paper', 'scissors'];

    //random choice selection for the computer (player)
    const onChooseOption = (playerChoice) => {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        if (playerChoice === 'rock' && computerChoice === 'scissors') {
            setPlayerScore(playerScore + 1);
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            setPlayerScore(playerScore + 1);
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            setPlayerScore(playerScore + 1);
        } else if (playerChoice !== computerChoice) {
            setComputerScore(computerScore + 1);
        }

        setChances(chances - 1);
    };

    //reset the values when clicked on PlayAgain button
    const onPlayAgain = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setChances(3);
    };

    //store the images source for the choice variable
    const getImageSource = (choice) => {
        switch (choice) {
            case 'rock':
                return require('./rock.png');
            case 'paper':
                return require('./paper.png');
            case 'scissors':
                return require('./scissors.png');
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {chances > 0 ? (
                <>

                    <View style={{
                        fontSize: 18,
                        backgroundColor: '#fff',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        marginBottom: 30,
                        width: 400,
                        flex: 0,
                        flexDirection: "column",
                        textAlign: 'justify',

                    }}>
                        <Text >Instructions : </Text>
                        <Text>
                            1. Start the Game: Tap on the image of either rock, paper, or scissors to make your choice. You have a limited number of chances.
                        </Text>
                        <Text>
                            2. Winning: Keep track of your points against the computer. After all chances are used, the winner (either you or the computer) will be displayed.
                        </Text>
                    </View>

                    <Text style={
                        {
                            fontSize: 20,
                            color: '#600090',
                            fontWeight: 'bold',
                            backgroundColor: '#fff',
                            paddingVertical: 12,
                            paddingHorizontal: 30,
                            borderRadius: 15,
                            marginBottom: 10,
                            width: 250,
                            textAlign: 'center',
                        }
                    }>Chances Left: {chances}</Text>


                    <View style={styles.choicesContainer}>
                        {choices.map((choice) => (
                            <TouchableOpacity
                                key={choice}
                                onPress={() => onChooseOption(choice)}
                            >
                                <Image
                                    style={styles.choiceImage}
                                    source={getImageSource(choice)}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>



                    <View style={styles.scoreContainer}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#600047',
                                width: 250,
                                fontWeight: 'bold',
                                backgroundColor: '#fff',
                                paddingVertical: 12,
                                paddingHorizontal: 20,
                                borderRadius: 15,
                                margin: 6,
                            }}>Your Score: {playerScore}</Text>

                        <Text style={{
                            fontSize: 18,
                            color: '#600047',
                            fontWeight: 'bold',
                            width: 250,
                            backgroundColor: '#fff',
                            paddingVertical: 12,
                            paddingHorizontal: 20,
                            borderRadius: 15,
                            margin: 6,
                        }}>Computer's Score: {computerScore}</Text>

                    </View>

                </>

            ) : (
                <View style={styles.modalContainer}>
                    
                         <StatusBar style="light" />
                         <View style={styles.modalContent}>
                    <Image
                        source={require('./gaming2.png')}
                        style={{ width: 300, height: 300, marginBottom: 50, borderRadius: 20, }}
                    ></Image>

                    <Text style={styles.modalText}>
                        {playerScore > computerScore ? 'Congratulations! You Win!' : 'Oops! You Lose!'}
                    </Text>
                    <TouchableOpacity onPress={onPlayAgain}>
                        <Text style={styles.playAgain}>Play Again</Text>
                    </TouchableOpacity>

                </View>
                </View>
            )}

        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9E5EA',
        height: 725,
    },

    choicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: "wrap",
        margin: 6,
    },
    choiceImage: {
        width: 130,
        height: 130,
        margin: 6,
    },
    scoreContainer: {
        marginTop: 30,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: 340,
        flexWrap: 'wrap',
        borderColor: "#600047",
    },
    resultContainer: {
        alignItems: 'center',
        flex: 0,
        width: '500',
        height: '1000',
        backgroundColor: "#F9E5EA",
    },

    resultText: {
        fontSize: 30,
        color: '#600047',
        fontWeight: 'bold',
        marginBottom: 20,
    },

    playAgain: {
        backgroundColor: "#600047",
        color: "#fff",
        paddingVertical: 16,
        paddingHorizontal: 50,
        fontSize: 18,
        borderRadius: 40,
        margin: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#600047',
      },

});
