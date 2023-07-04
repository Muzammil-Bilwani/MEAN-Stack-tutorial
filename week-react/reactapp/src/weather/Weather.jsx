import { useEffect, useState } from "react"
import { WeatherAPI } from "./weatherApi"
import Sunny from "../assets/sun.png"
import Cloudy from "../assets/cloud.png"
import Rainy from "../assets/rain.png"
import Snowy from "../assets/snow.png"

import "./Weather.css"

const WeatherCondition = {
  SUNNY: "Sunny",
  CLOUDY: "Cloudy",
  RAINY: "Rainy",
  SNOWY: "Snowy"
}

export const Weather = () => {
  const [cities, setCities] = useState([])

  const [selectedCity, setSelectedCity] = useState("")

  const [result, setResult] = useState("")

  useEffect(() => {
    WeatherAPI.getCities().then((cities) => {
      setCities(cities.data.data)
    })
  }, [])

  useEffect(() => {
    if (selectedCity) {
      WeatherAPI.getWeather(selectedCity).then((weather) => {
        setResult(weather.data)
      })
    }
  }, [selectedCity])

  return (
    <div
      style={{
        backgroundColor: "#151645",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {result && (
          <>
            <h1 className="city">{result.city}</h1>

            {result.condition === WeatherCondition.SUNNY && (
              <img className="weatherImage" src={Sunny} alt="Sunny" />
            )}
            {result.condition === WeatherCondition.CLOUDY && (
              <img className="weatherImage" src={Cloudy} alt="Cloudy" />
            )}
            {result.condition === WeatherCondition.RAINY && (
              <img className="weatherImage" src={Rainy} alt="Rainy" />
            )}
            {result.condition === WeatherCondition.SNOWY && (
              <img className="weatherImage" src={Snowy} alt="Snowy" />
            )}
            <h1 className="temperature">{result.temperature}°C</h1>
            <h2 className="weatherDescription">{result.description}</h2>
            <p className="details">Humidity: {result.humidity}</p>
            <p className="details">{result.condition}</p>
          </>
        )}
      </div>
      <ul
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          color: "white"
        }}
      >
        {cities.map((city, index) => (
          <li
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "5px",
              margin: "5px",
              width: "100px",
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            onClick={() => {
              setSelectedCity(city)
            }}
            key={index}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  )
}
