import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import { useState, useEffect } from 'react';


export default function BookFinder() {

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState(false);
    

    useEffect(() => {
        fetchBooks();
    }, []);

    //async function to fetch the books from the API
    const fetchBooks = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
          );
          const data = await response.json();
          if (data.items) {
            setBooks(data.items);
            setSearchError(false);
          } else {
            setBooks([]);
            setSearchError(true);
          }
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };

    //displaying the book items
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleBookPress(item)}>

            <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                {item.volumeInfo.imageLinks && (

                    <Image
                        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                        style={{ width: 80, height: 120, marginRight: 10 }}
                    />
                )}
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18 }}>{item.volumeInfo.title}</Text>
                    <Text style={{ fontStyle: 'italic', marginBottom: 5 }}>
                        by {item.volumeInfo.authors?.join(', ')}
                    </Text>
                    <Text>Price: {item.saleInfo?.listPrice?.amount || 'Not for sale'}</Text>
                    <Text>Country: {item.saleInfo?.country}</Text>
                    <Text>Pages: {item.volumeInfo.pageCount}</Text>

                </View>
            </View>
        </TouchableOpacity>
    );

    const handleBookPress = (book) => {
        setSelectedBook(book);
        setModalVisible(true);
    };
    const handleSearch = () => {
        fetchBooks();
      };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                placeholder="Enter book niche/query"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <Button title="Search" onPress={handleSearch} />

            {searchError && <Text>No Books Found! Try modifying your search</Text>}


            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ width: '100%' }}
            />

            {/*Modal to display the info of the book in details*/}

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {selectedBook && (
                            <View style={{ padding: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                                    {selectedBook.volumeInfo.title}
                                </Text>

                                {selectedBook.volumeInfo.imageLinks && (
                                    <Image
                                        source={{ uri: selectedBook.volumeInfo.imageLinks.thumbnail }}
                                        style={{ width: 150, height: 220, marginBottom: 10 }}
                                    />
                                )}
                                <Text style={{ fontStyle: 'italic', marginBottom: 10 }}>
                                    by {selectedBook.volumeInfo.authors?.join(', ')}
                                </Text>
                                <Text>Description : {selectedBook.volumeInfo.description}</Text>
                                <Text>Price: {selectedBook.saleInfo?.listPrice?.amount || 'Not for sale'}</Text>
                                <Text>Country: {selectedBook.saleInfo?.country}</Text>
                                <Text>Pages: {selectedBook.volumeInfo.pageCount}</Text>
                                {/* Add more details about the book as needed */}

                                <Button title="Close" onPress={() => setModalVisible(false)} />
                            </View>
                        )}
                    </View>
                </ScrollView>

            </Modal>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
    ,
    button: {
        textAlign: 'center',
        margin: 10,
        width: 230,
        paddingHorizontal: 20,
        paddingVertical: 14,
        fontSize: 16,
        borderColor: '#ed6872',
        color: '#fff',
        borderRadius: 10,
        backgroundColor: '#600047',
        shadowColor: '#ed6872',
    },
    heading: {
        color: '#624CAB',
        fontWeight: "bold",
        fontSize: 22,
        padding: 8,
        textAlign: 'center',
    },

    btngrid: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        margin: 20,
        width: "100%",

    },
});