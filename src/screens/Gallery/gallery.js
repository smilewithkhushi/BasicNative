import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const fetchImages = async () => {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

export default function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const imagesData = await fetchImages();
            setImages(imagesData);
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Welcome to the Gallery! </Text>

            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        
                        <Image
                            source={{ uri:item.download_url }}
                            style={styles.image}
                            resizeMode="cover"
                            
                        />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        padding: 10,
    },
    imageContainer: {
        flex: 1,
        margin: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 6,

    },
    heading: {
        color: '#600047',
        fontWeight: "bold",
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
});
