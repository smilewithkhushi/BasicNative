import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Styles from "../WeatherApp/common/Styles";
import Icon, { Icons } from "../WeatherApp/components/Icons";
import VirtualizedList from "../WeatherApp/components/VirtualizedList";
import { days, hours } from "../WeatherApp/screens/drawer/arrays";
import { colors, constant } from "../WeatherApp/screens/drawer/constant";
import { TextInput } from "react-native";
// import {MapPinIcon} from 'react-native-heroicons/solid';
import { debounce } from "lodash";
import { Image } from "react-native";
import { fetchLocations, fetchWeatherForcast } from "./api/weather";

const { width } = Dimensions.get("screen");
var moment = require("moment"); // require
moment().format();

const DegreeText = ({ val, size, weight, color = "white", style }) => (
  <View style={[styles.degreeText, style]}>
    <Icon type={Icons.FontAwesome} name="circle-o" color={color} style={styles.degree} size={size > 18 ? size / 4 : 8} />
    <Text style={{ fontSize: size, fontWeight: weight, color }}>{val}</Text>
  </View>
);

const HourWeatherItem = ({ hour, temperature, icon }) => {
  const fontSize = 18;
  const weight = "normal";
  const color = icon === "sun" ? "gold" : colors.white;
  // console.log('https:'+icon);
  return (
    <View style={styles.hourWeatherItem}>
      <Text style={{ fontSize: 16, color: "white" }}>{hour}</Text>
      <Image source={{ uri: "https:" + icon }} className="w-11 h-11" />
      <DegreeText val={temperature} size={fontSize} weight={weight} />
    </View>
  );
};

const DaysWeatherItem = ({ day, minTemp, maxTemp, icon }) => {
  const fontSize = 16;
  const weight = "normal";
  const color = icon === "sun" ? "gold" : colors.white;
  return (
    <View style={styles.dayWeatherItem}>
      <Text style={{ fontSize: 16, color: "white" }}>{day}</Text>
      <Image source={{ uri: "https:" + icon }} className="w-12 h-12" />

      <View style={Styles.rowView}>
        <DegreeText val={minTemp} size={fontSize} weight={weight} style={Styles.marginHorizontal} />
        <DegreeText val={maxTemp} size={fontSize} weight={weight} style={Styles.marginHorizontal} />
      </View>
    </View>
  );
};

const DrawerScreen = () => {
  useEffect(() => {
    fetchWeatherForcast({ cityName: "Bengaluru", days: "7" }).then((res) => {
      console.log(res);
      setWeather(res);
    });
  }, []);

  const [search, setSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    console.log(text);
    if (text.length == 0) {
      setLocations([]);
    }
    // setSearchText(text);
    if (text.length > 0) {
      fetchLocations({ cityName: text }).then((res) => {
        setLocations(res);
      });
    }
  };

  const handleTextDebouce = useCallback(debounce(handleSearch, 100), []);

  const handleLocation = (location) => {
    // setLocations(data);
    console.log(location);
    setLocations([]);
    fetchWeatherForcast({ cityName: location?.name, days: "7" }).then((res) => {
      console.log(res);
      setWeather(res);
    });
  };

  const handleSearchButton = () => {
    console.log("Button Pressed", searchText);
    setLocations([]);
    fetchWeatherForcast({ cityName: searchText, days: "7" }).then((res) => {
      console.log(res);
      setWeather(res);
    });
  };

  const { current, location, forecast } = weather;

  return Object.keys(weather).length > 0 ? (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.screenBg} />
      <View style={styles.iContainer}>
        <View>
          <Image source={require("../WeatherApp/assets/images/sunset.jpeg")} style={[styles.bgImage]} />

          <View className="flex flex-row justify-center">
            <View className="flex-row justify-end items-center mt-5 w-11/12 p-2 rounded-full border border-gray-300 bg-white">
              <TextInput
                onChangeText={(text) => {
                  handleTextDebouce(text);
                }}
                placeholder="Search City"
                placeholderTextColor={"lightgray"}
                className="flex-1 ml-2 p-1 text-gray-700"
                autoFocus={true}
                onBlur={() => setSearch(false)}
              />
            </View>
            {locations.length > 0 ? (
              <View className="absolute z-10 w-11/12 bg-gray-300 top-20 rounded-2xl">
                {locations.map((location, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder ? "border border-b-2 border-b-gray-400" : "";
                  return (
                    <TouchableOpacity onPress={() => handleLocation(location)} key={index} className={"flex-row items-center border-0 p-3 px-4 mb-1" + borderClass}>
                      <Icon type={Icons.Ionicons} name="location" />
                      <Text className="text-black  ml-2">
                        {location?.name}, {location?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>

          <VirtualizedList>
            <View style={styles.view}>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={styles.title}>
                  {location ? location.name : "San Fransisco"} , {location ? location.country : "USA"}
                </Text>
                <DegreeText val={current ? current.temp_c : 18} size={40} style={Styles.marginVertical} />
                <View style={styles.chip}>
                  <Text style={styles.text}>{current ? current.condition?.text : "Cloudy"}</Text>
                </View>
              </View>
              <Text style={{ color: colors.white }}>Today</Text>
              <View style={styles.status}>
                <View style={styles.chip}>
                  <Icon name="droplet" type={Icons.Feather} />
                  <Text style={[styles.text, { marginHorizontal: constant.SPACING / 3 }]}>{current ? current.humidity : 12}%</Text>
                </View>
                <View style={styles.chip}>
                  <Icon name="water" type={Icons.Entypo} />
                  <Text style={[styles.text, { marginHorizontal: constant.SPACING / 3 }]}>{current ? current.precip_mm : 0.542} mm</Text>
                </View>
                <View style={styles.chip}>
                  <Icon name="wind" type={Icons.Feather} />
                  <Text style={[styles.text, { marginHorizontal: constant.SPACING / 3 }]}>{current ? current.wind_kph : 9}km/h</Text>
                </View>
              </View>
              <FlatList
                data={forecast ? forecast.forecastday[2].hour : hours}
                // keyExtractor={(item, index) => item.time_epoch + index.toString()}
                // key={item.time_epoch}
                horizontal
                renderItem={({ item, index }) => (
                  <HourWeatherItem hour={moment(item.time).format("hA")} icon={forecast ? item.condition.icon : item.icon} temperature={forecast ? item.temp_c : item.temp} />
                )}
              />
              <FlatList
                data={forecast ? forecast.forecastday : days}
                // keyExtractor={(item, index) => item.id + index.toString()}
                renderItem={({ item, index }) => (
                  <DaysWeatherItem
                    day={forecast ? moment(item.date).format("dddd") : item.day}
                    icon={forecast ? item.day.condition.icon : item.icon}
                    minTemp={forecast ? item.day.mintemp_c : item.minTemp}
                    maxTemp={forecast ? item.day.maxtemp_c : item.maxTemp}
                  />
                )}
              />
            </View>
          </VirtualizedList>
        </View>
      </View>
    </View>
  ) : (
    <View style={{ backgroundColor: "#FCFCFF" }} className="flex-1 justify-center items-center">
      <Image className="h-80 w-80" source={require("../../screens/WeatherApp/assets/loading.gif")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBg,
  },
  iContainer: {
    flex: 1,
  },
  bgImage: {
    width,
    height: width,
    position: "absolute",
    zIndex: -1,
  },
  menu: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  degree: {
    position: "absolute",
    top: 0,
    right: -12,
  },
  degreeText: {
    marginVertical: 5,
  },
  hourWeatherItem: {
    marginVertical: constant.SPACING,
    marginRight: constant.SPACING,
    padding: constant.SPACING,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: constant.borderRadius,
    alignItems: "center",
  },
  dayWeatherItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: constant.SPACING / 2,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: constant.borderRadius,
    padding: constant.SPACING / 2,
  },
  view: {
    marginTop: 130,
    paddingHorizontal: constant.SPACING,
  },
  title: {
    fontSize: constant.titleFontSize,
    color: colors.white,
    fontWeight: "700",
  },
  chip: {
    backgroundColor: colors.alphaWhite,
    borderRadius: 25,
    paddingVertical: constant.SPACING / 3,
    paddingHorizontal: constant.SPACING / 2,
    ...Styles.marginVertical,
    ...Styles.rowView,
  },
  text: {
    fontSize: constant.textFontSize,
  },
  status: {
    ...Styles.rowView,
    justifyContent: "space-around",
  },
});

export default DrawerScreen;
