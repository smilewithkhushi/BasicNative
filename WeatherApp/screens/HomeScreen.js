import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { debounce } from 'lodash'
import { fetchForecast, fetchLocation } from '../api/weather'
import { weatherImages } from '../constants'
import * as Progress from 'react-native-progress'
import { getData, storeData } from '../utils/asyncStorage'

export default function HomeScreen() {
    const [showsearch, toggleSearch] = useState(false)
    const [locations, setLocation] = useState([1, 2, 3])
    const [weather, setWeather] = useState({})
    const [loading,setLoading]=useState(true)
    // completed



    const handleLocation = (loc) => {
        console.log('location: ', loc)
        setLocation([])
        toggleSearch(false)
        setLoading(true)
        fetchForecast({
            city: loc.name,
            days: '3'
        }).then(data => {
            setWeather(data)
            setLoading(false)
            // console.log('got forecast: ', data)
            storeData('city',loc.name)
        })
    }

    const handleSearch = value => {
        console.log('value: ', value)
        if (value.length > 2) {
            fetchLocation({ city: value }).then(data => {
                setLocation(data)
            })
        }

    }

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        let mycity=await getData('city')
        let cityname='Ajmer' // default city
        if(mycity){
            cityname=mycity
        }
        fetchForecast({
            city:cityname,
            days:'7'
        }).then(data=>{
            setWeather(data)
            setLoading(false)
        })
    }


    /* debounce is used to call the api only when complete 
       cityname is written and reduce
       useless api calls (after 1200 milliseconds) */
    const handleTextDebounce = useCallback(debounce(handleSearch, 1200), [])

    const { current, location } = weather

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <StatusBar barStyle={"light-content"} />
            <Image blurRadius={65} source={require('../assets/images/bg.png')}
                className="absolute h-full w-full"
            />
            {
                loading?(
                    <View className="flex-1 flex-row justify-center items-center">
                        <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2"/>
                    </View>
                ):(
                    <SafeAreaView className="flex flex-1">
                {/* search city */}
                <View style={{ height: '7%' }} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full"
                        style={{ backgroundColor: showsearch ? theme.bgWhite(0.2) : 'transparent' }}>
                        {
                            showsearch ? (<TextInput placeholder='Search City' onChangeText={handleTextDebounce} placeholderTextColor={'lightgray'}
                                className="pl-6 h-12 flex-1 text-base text-white"
                            />
                            ) : null
                        }

                        <TouchableOpacity
                            onPress={() => toggleSearch(!showsearch)}
                            style={{ backgroundColor: theme.bgWhite(0.3) }}
                            className="rounded-full p-3 m-1"
                        >
                            <MagnifyingGlassIcon size="22" color="white" />

                        </TouchableOpacity>
                    </View>
                    {
                        locations.length > 0 && showsearch ? (
                            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                {
                                    locations.map((loc, index) => {
                                        let showBorder = index + 1 != locations.length
                                        let borderClass = showBorder ? 'border-b-2 border-b-gray-400' : ''
                                        return (
                                            <TouchableOpacity
                                                onPress={() => handleLocation(loc)}
                                                key={index}
                                                className={"flex-row items-center border-0 p-3 px-4 mb-1 " + borderClass}
                                            >
                                                <MapPinIcon size="20" color="gray" />
                                                <Text className="text-black text-lg ml-2" >{loc?.name},{loc?.country}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ) : null
                    }

                </View>
                {/* Forecast section */}
                <View className="mx-4 flex justify-around flex-1 mb-2">
                    {/* location */}
                    <Text className="text-white text-center text-2xl font-bold">
                        {location?.name},
                        <Text className="text-lg font-semibold text-xl text-gray-300">
                            {" " + location?.country}
                        </Text>
                    </Text>
                    {/* weather image */}
                    <View className="flex-row justify-center">
                        <Image
                            source={weatherImages[current?.condition?.text]}

                            className="w-52 h-52"
                        ></Image>
                    </View>

                    <View className="space-y-2" >
                        <Text className="text-center font-bold text-white text-4xl ml-5">{current?.temp_c}&#176;</Text>
                        <Text className="text-center  text-white text-xl tracking-widest">{current?.condition?.text}</Text>
                    </View>
                    <View className="flex-row justify-between mx-4" >
                        <View className="flex-row space-x-2 items-center" >
                            <Image source={require('../assets/icons/wind.png')}
                                className="h-6 w-6"
                            ></Image>
                            <Text className="text-white font-semibold text-base">{current?.wind_kph}km</Text>
                        </View>
                        <View className="flex-row space-x-2 items-center" >
                            <Image source={require('../assets/icons/drop.png')}
                                className="h-6 w-6"
                            ></Image>
                            <Text className="text-white font-semibold text-base">{current?.humidity}%</Text>
                        </View>
                        <View className="flex-row space-x-2 items-center" >
                            <Image source={require('../assets/icons/sun.png')}
                                className="h-6 w-6"
                            ></Image>
                            <Text className="text-white font-semibold text-base">{weather?.forecast?.forecastday[0]?.astro.sunrise}</Text>
                        </View>
                    </View>
                </View>
                {/* forecast for other days */}
                <View className="mb-10 space-y-3" >
                    <View className="flex-row items-center mx-5 space-x-2" >
                        <CalendarDaysIcon size="24" color="white" />
                        <Text className="text-white text-base">Daily forecast</Text>
                    </View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            weather?.forecast?.forecastday?.map((item, index) => {
                                let date=new Date(item.date)
                                let options={weekday:'long'}
                                let dayName=date.toLocaleDateString('en-US',options)
                                dayName=dayName.split(',')
                                return (
                                    <View 
                                    key={index}
                                    className="flex justify-center items-center w-20 rounded-3xl space-y-1 mr-4"
                                        style={{ backgroundColor: theme.bgWhite(0.15) }}
                                    >
                                        <Image source={weatherImages[item?.day?.condition?.text]} 
                                        className="h-11 w-11" />
                                        <Text className="text-white" >{dayName}</Text>
                                        <Text className="text-white font-semibold text-xl" >{item?.day?.avgtemp_c}&#176;</Text>
                                    </View>
                                )
                            })
                        }


                    </ScrollView>

                </View>
            </SafeAreaView>
                )
            }
            

        </View>
    )
}