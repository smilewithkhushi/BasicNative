import axios from "axios";

let apiKey="153ab2c85b5646d9a58162344241905"

const forecastEndpoint=params=>`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.city}&days=7&aqi=no&alerts=no
`
const locationsEndpoint=params=>`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.city}`

const apiCall = async(endpoint)=>{
    const options={
        method:'GET',
        url:endpoint
    }
    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log('error: ',error)
        return null
    }
}

export const fetchForecast = params =>{
    let forecastUrl=forecastEndpoint(params)
    return apiCall(forecastUrl)
}

export const fetchLocation = params =>{
    let locationUrl=locationsEndpoint(params)
    return apiCall(locationUrl)
}