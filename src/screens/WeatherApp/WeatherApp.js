// import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import React from "react";
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Styles from "../WeatherApp/common/Styles";
import Icon, { Icons } from "../WeatherApp/components/Icons";
import VirtualizedList from "../WeatherApp/components/VirtualizedList";
import { days, hours } from "../WeatherApp/screens/drawer/arrays";
import { colors, constant } from "../WeatherApp/screens/drawer/constant";
// import DrawerView from '../WeatherApp/screens/drawer/DrawerView';
import { Image } from "react-native";

const { width } = Dimensions.get("screen");

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
  return (
    <View style={styles.hourWeatherItem}>
      <Text style={{ fontSize: 16, color: "white" }}>{hour}</Text>
      <Icon type={Icons.FontAwesome5} name={icon} color={color} style={Styles.marginVertical} />
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
      <Icon type={Icons.FontAwesome5} name={icon} color={color} style={Styles.marginVertical} />
      <View style={Styles.rowView}>
        <DegreeText val={minTemp} size={fontSize} weight={weight} style={Styles.marginHorizontal} />
        <DegreeText val={maxTemp} size={fontSize} weight={weight} style={Styles.marginHorizontal} />
      </View>
    </View>
  );
};

export default function DrawerScreen({ route }) {
  //   const isDrawerOpen = useDrawerStatus();

  //   const toggleDrawer = () => navigation.toggleDrawer();

  //   const drawerProgress = useDrawerProgress();

  //   const viewStyles = useAnimatedStyle(() => {
  //     const borderRadius = interpolate(
  //       drawerProgress.value,
  //       [0, 1],
  //       [0, 40],
  //     )
  //     return {
  //       borderRadius,
  //     }
  //   })

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.screenBg} />
      <View style={styles.iContainer}>
        <View>
          <Image source={require("../WeatherApp/assets/images/sunset.jpeg")} style={[styles.bgImage]} />
          <VirtualizedList>
            <TouchableOpacity style={styles.menu}>
              <Icon name={"menu"} type={Icons.Feather} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.view}>
              <View style={{ alignItems: "flex-start" }}>
                <Text style={styles.title}>San Fransisco</Text>
                <DegreeText val={18} size={40} style={Styles.marginVertical} />
                <View style={styles.chip}>
                  <Text style={styles.text}>Cloudy</Text>
                </View>
              </View>
              <Text style={{ color: colors.white }}>Today</Text>
              <View style={styles.status}>
                <View style={styles.chip}>
                  <Icon name="droplet" type={Icons.Feather} />
                  <Text style={[styles.text, { marginHorizontal: constant.SPACING / 3 }]}>12%</Text>
                </View>
                <View style={styles.chip}>
                  <Icon name="alert-circle" type={Icons.Feather} />
                  <Text style={[styles.text, { marginHorizontal: constant.SPACING / 3 }]}>0.542mBar</Text>
                </View>
                <View style={styles.chip}>
                  <Icon name="wind" type={Icons.Feather} />
                  <Text style={[styles.text, { marginHorizontal: constant.SPACING / 3 }]}>9km/h</Text>
                </View>
              </View>
              <FlatList
                data={hours}
                keyExtractor={(item, index) => item.id + index.toString()}
                horizontal
                renderItem={({ item, index }) => <HourWeatherItem hour={item.hour} icon={item.icon} temperature={item.temp} />}
              />
              <FlatList
                data={days}
                keyExtractor={(item, index) => item.id + index.toString()}
                renderItem={({ item, index }) => <DaysWeatherItem day={item.day} icon={item.icon} minTemp={item.minTemp} maxTemp={item.maxTemp} />}
              />
            </View>
          </VirtualizedList>
        </View>
      </View>
    </View>
  );
}

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
    marginTop: 180,
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
