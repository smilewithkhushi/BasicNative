import React from 'react'
import { Pressable, StyleSheet } from 'react-native';
import { View, Text, Image, TextInput, ScrollView, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
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

            <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', shadowColor: '#ccc' }}>

                {item.volumeInfo.imageLinks && (

                    <Image
                        source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
                        style={{ width: 80, height: 120, marginHorizontal: 10 }}
                    />
                )}
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.volumeInfo.title}</Text>
                    <Text style={{ fontStyle: 'italic', marginBottom: 5 }}>
                        by {item.volumeInfo.authors?.join(', ')}
                    </Text>

                    <Text>Country: {item.saleInfo?.country}</Text>
                    <Text>Pages: {item.volumeInfo.pageCount}</Text>
                    <Text>Category: {item.volumeInfo.categories}</Text>

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

    //image slider for the slider in mid of the screens
    const imageUrls = [
        'https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664382465508-f9ef253859b1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1509291985095-788b32582a81?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664373232938-b14f67fb39ef?q=80&w=3075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    const readingTips = [
        require('./img1.png'),
        require('./img2.png'),
        require('./img3.png'),
        require('./img4.png'),
        require('./img5.png'),
        require('./img6.png'),
    ];


    return (
        <ScrollView>
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: 10,
                    backgroundColor: '#fcf1f0'
                }
            }>

                <Text style={
                    {
                        fontSize: 35,
                        textAlign: 'center',
                        color: '#ff6052',
                        fontWeight: '900',
                        letterSpacing: 4,
                        marginHorizontal: 20,
                        marginTop: 10,
                    }
                }>
                    Discover Books, Dive into Stories
                </Text>

                <View style={styles.imagecontainer}>
                    <ScrollView horizontal bounces>
                        {imageUrls.map((url, index) => (
                            <Image key={index} source={{ uri: url }} style={styles.image} />
                        ))}
                    </ScrollView>
                </View>

                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    letterSpacing: 2,
                    marginHorizontal: 25,
                    marginVertical: 10,
                    fontWeight: '500'
                }}>
                    Search and explore your favourite books in one place.
                </Text>

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, width: 300, borderRadius: 8, marginVertical: 10, }}
                    placeholder="Enter the type of book you want to read"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />

                <Pressable>
                    <Text style={styles.button} onPress={(() => {
                        console.log("Button to searching the book is Pressed!")
                        handleSearch()
                    })}>Search</Text></Pressable>

                {searchError && <Text style={
                    { marginVertical: 20, fontStyle: 'italic', fontWeight: '500', }
                }>
                    No Books Found! Try modifying your search
                </Text>}

                {/*Display the list of all the books belonging to the item/topic searched in the query */}
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={{ width: '100%' }}
                />

                {/*Modal to display the info of the particular (clicked) book in details*/}

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ScrollView>

                        <View
                            style={
                                {
                                    flex: 1,
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    marginHorizontal: 20,
                                    marginVertical: 50,
                                    backgroundColor: '#F5D7E3',
                                    padding: 5,
                                    borderRadius: 16,
                                    borderColor: '#DDDBCB',
                                    borderWidth: 2,
                                }}>


                            {selectedBook && (

                                <View style={{ padding: 20 }}>
                                    <Text style={
                                        {
                                            fontSize: 22,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            marginBottom: 10,
                                            color: '#600047',
                                            letterSpacing: 1,
                                        }}>
                                        {selectedBook.volumeInfo.title}
                                    </Text>

                                    {selectedBook.volumeInfo.imageLinks && (
                                        <Image
                                            source={{ uri: selectedBook.volumeInfo.imageLinks.thumbnail }}
                                            style={{ width: 200, height: 250, margin: 10, alignSelf: 'center' }}
                                        />
                                    )}

                                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 17, textAlign: 'center', margin: 4 }}>
                                        by {selectedBook.volumeInfo.authors?.join(', ')}
                                    </Text>

                                    <Text style={{ textAlign: 'center', margin: 4 }}>
                                        {selectedBook.volumeInfo.description
                                            ? selectedBook.volumeInfo.description.slice(0, 300) // Limit to 300 characters
                                            : 'Description not available'}
                                        {selectedBook.volumeInfo.description &&
                                            selectedBook.volumeInfo.description.length > 300 &&
                                            '...'}
                                    </Text>

                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', margin: 4 }}>Price: {selectedBook.saleInfo?.listPrice?.amount || 'Not for sale'}</Text>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', margin: 4 }}>Country: {selectedBook.saleInfo?.country}</Text>
                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', margin: 4 }}>Pages: {selectedBook.volumeInfo.pageCount}</Text>
                                    {/* Add more details about the book as needed */}


                                    <Pressable>
                                        <Text style={styles.closebtn} onPress={(() => {
                                            console.log("Button to close modal is Pressed!")
                                            setModalVisible(false)
                                        })}>Close</Text></Pressable>


                                </View>
                            )}

                        </View>


                    </ScrollView>

                </Modal>

                {/* Image slider showing productivity tips */}
                <View style={styles.imagecontainer}>
                    <ScrollView horizontal bounces>
                        {readingTips.map((source, index) => (
                            <Image key={index} source={source} style={styles.tipsimage} />
                        ))}
                    </ScrollView>

                </View>

            </View>
        </ScrollView>
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
        width: 300,
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontSize: 16,
        borderColor: '#ed6872',
        color: '#fff',
        borderRadius: 8,
        backgroundColor: '#ff6052',
        shadowColor: '#ed6872',
        marginBottom: 30,
    },

    closebtn: {
        textAlign: 'center',
        width: 300,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontSize: 16,
        borderColor: '#ed6872',
        color: '#fff',
        borderRadius: 8,
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
    imagecontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        backgroundColor: '#FFE4E1',
    },
    image: {
        width: 320,
        height: 420,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    tipsimage: {
        width: 300,
        height: 300,
        marginVertical: 20,
        marginHorizontal: 6,
    },
});