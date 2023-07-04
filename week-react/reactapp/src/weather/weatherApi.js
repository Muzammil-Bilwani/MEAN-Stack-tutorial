import axios from "axios"

const BASE_URL = "https://bilwani-weather-api.fly.dev"

export const WeatherAPI = {
  getCities: () => {
    return axios.get(BASE_URL + `/locations`)
  },
  getWeather: (city) => {
    return axios.get(BASE_URL + `/weather/${city}`)
  }
}
