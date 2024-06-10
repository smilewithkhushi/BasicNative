import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

// Define colors associated with different Pokémon types
const typeColors = {
  rock: "#BBAB67",
  ghost: "#6767BB",
  steel: "#AAABBA",
  water: "#3398FE",
  grass: "#50a425",
  psychic: "#FE5499",
  ice: "#67CCFE",
  dark: "#775544",
  fairy: "#EF99EF",
  normal: "#A9A998",
  fighting: "#C12239",
  flying: "#8898FE",
  poison: "#AB5499",
  ground: "#DCBB54",
  bug: "#ABBA22",
  fire: "#FF4422",
  electric: "#dfb624",
  dragon: "#7667EE",
};

export default function Pokedex() {
  const [pokemon, setPokemon] = useState(null); // State to store the current Pokémon data
  const [search, setSearch] = useState(""); // State to store the search query

  // Fetch initial Pokémon data when the component mounts
  useEffect(() => {
    fetchPokemon(1);
  }, []);

  // Function to fetch Pokémon data by name or ID
  const fetchPokemon = async (pkmon) => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmon}`);
      if (response.status === 404) {
        Alert.alert("Error", "The Pokémon name or id doesn't exist");
        return;
      }
      let data = await response.json();
      setPokemon(data); // Update state with fetched data
    } catch (error) {
      console.error(error);
    }
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to handle the search button click
  const handleSearch = () => {
    fetchPokemon(search.toLowerCase());
    setSearch("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.input}
          placeholder="Pokemon Name or Id (upto 1025)"
          value={search}
          onChangeText={setSearch}
        />
        {/* TouchableOpacity used to create a custom button with dynamic background color */}
        <TouchableOpacity
          style={[
            styles.searchButton,
            {
              backgroundColor: pokemon
                ? typeColors[pokemon.types[0].type.name]
                : "#50a425",
            },
          ]}
          onPress={handleSearch}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => pokemon && fetchPokemon(pokemon.id - 1)}
        >
          <Text
            style={[
              styles.button,
              {
                backgroundColor: pokemon
                  ? typeColors[pokemon.types[0].type.name]
                  : "#50a425",
              },
            ]}
          >
            {"<"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => fetchPokemon(Math.floor(Math.random() * 1024))}
        >
          <Text
            style={[
              styles.button,
              {
                backgroundColor: pokemon
                  ? typeColors[pokemon.types[0].type.name]
                  : "#50a425",
              },
            ]}
          >
            Random
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pokemon && fetchPokemon(pokemon.id + 1)}
        >
          <Text
            style={[
              styles.button,
              {
                backgroundColor: pokemon
                  ? typeColors[pokemon.types[0].type.name]
                  : "#50a425",
              },
            ]}
          >
            {">"}
          </Text>
        </TouchableOpacity>
      </View>
      {pokemon && (
        <View
          style={[
            styles.card,
            { backgroundColor: typeColors[pokemon.types[0].type.name] },
          ]}
        >
          {/* Display a local image */}
          <Image source={require("./pokeball.png")} style={styles.pokeballImage} />
          <View style={styles.nameBox}>
            <Text style={styles.name}>
              {capitalizeFirstLetter(pokemon.name)}
            </Text>
            <Text style={styles.id}>
              #{pokemon.id.toString().padStart(3, "0")}
            </Text>
          </View>
          <Image
            source={{
              uri: pokemon.sprites.other["official-artwork"].front_default,
            }}
            style={styles.sprite}
          />
          <View style={styles.whiteLayer}>
            <View style={styles.typeBox}>
              {pokemon.types.map((type, index) => (
                <View
                  key={index}
                  style={[
                    styles.type,
                    { backgroundColor: typeColors[type.type.name] },
                  ]}
                >
                  <Text style={styles.typeText}>
                    {capitalizeFirstLetter(type.type.name)}
                  </Text>
                </View>
              ))}
            </View>
            {/* Dynamic color for 'About' text based on Pokémon type */}
            <Text
              style={[
                styles.highlightText,
                { color: typeColors[pokemon.types[0].type.name] },
              ]}
            >
              About
            </Text>
            <View style={styles.physic}>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>
                  {(pokemon.weight / 10).toFixed(1)} kg
                </Text>
                <Text style={styles.statLabel}>Weight</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statValue}>
                  {(pokemon.height / 10).toFixed(1)} m
                </Text>
                <Text style={styles.statLabel}>Height</Text>
              </View>
              <View style={styles.statBox}>
                {pokemon.abilities.map((ability, index) => (
                  <Text key={index} style={styles.ability}>
                    {capitalizeFirstLetter(ability.ability.name)}
                  </Text>
                ))}
                <Text style={styles.statLabel}>Abilities</Text>
              </View>
            </View>
            {/* Dynamic color for 'Base Stats' text based on Pokémon type */}
            <Text
              style={[
                styles.highlightText,
                { color: typeColors[pokemon.types[0].type.name] },
              ]}
            >
              Base Stats
            </Text>
            {pokemon.stats.map((stat, index) => (
              <View key={index} style={styles.gridStats}>
                <Text style={styles.statName}>
                  {stat.stat.name.toUpperCase()}
                </Text>
                <Text style={styles.statValue}>{stat.base_stat}</Text>
                <View style={styles.outerBar}>
                  <View
                    style={[
                      styles.innerBar,
                      {
                        width:
                          stat.base_stat > 100 ? "100%" : `${stat.base_stat}%`,
                        backgroundColor: typeColors[pokemon.types[0].type.name],
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  searchbar: {
    flexDirection: "row",
    width: "100%",
  },
  searchButton: {
    width: "20%",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: "80%",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "99%",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#50a425",
    color: "#fff",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  card: {
    borderRadius: 8,
    width: "100%",
    padding: 10,
    alignItems: "center",
    position: "relative",
  },
  pokeballImage: {
    position: "absolute",
    top: 20,
    right: 10,
  },
  nameBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  id: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  sprite: {
    width: 200,
    height: 200,
  },
  whiteLayer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  typeBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  type: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  typeText: {
    color: "#fff",
    fontWeight: "700",
  },
  highlightText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
  physic: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 0,
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 12,
    fontWeight: "400",
    color: "#1d1d1d",
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "400",
    color: "#666",
    marginTop: 4,
  },
  ability: {
    fontSize: 12,
    fontWeight: "400",
    color: "#1d1d1d",
  },
  gridStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  statName: {
    flex: 0.38,
    color: "#666",
    fontSize: 12,
  },
  statValue: {
    flex: 0.1,
    textAlign: "center",
    color: "#000",
  },
  outerBar: {
    flex: 0.48,
    height: 5,
    backgroundColor: "#ddd",
    borderRadius: 4,
    overflow: "hidden",
  },
  innerBar: {
    height: "100%",
  },
});
