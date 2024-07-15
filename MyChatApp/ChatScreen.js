import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { db } from './firebase'; // Assuming you've set up Firebase

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })));
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = () => {
    db.collection('messages').add({
      message: input,
      timestamp: new Date().toISOString(),
    });
    setInput('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text>{item.data.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        placeholder="Enter message"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
