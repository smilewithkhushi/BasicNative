import axios from "axios";
import Colors from './../constants/Colors';

const api=process.env.EXPO_PUBLIC_API_KEY

const forecastEndpoint=params=>`https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${params.cityName}&days=7&aqi=no&alerts=no`
const LocationsEndpoint=params=>`https://api.weatherapi.com/v1/search.json?key=${api}&q=${params.cityName}`

const apicall=async(endpoint)=>{
    const options={
        method: 'GET',
        url:endpoint
    }
    try {
        const response=await axios.request(options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const fetchWeatherForcast=params=>{
    let forecastUrl=forecastEndpoint(params)
    return apicall(forecastUrl)
}

export const fetchLocations=params=>{
    let locationsUrl=LocationsEndpoint(params)
    console.log(locationsUrl);
    return apicall(locationsUrl)
}
