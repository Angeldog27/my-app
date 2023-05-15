import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  let [message, setMessage] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=082d3d02ffdb12f2fd9b259e2ced1d0d&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a City..."
        onChange={updateCity}
      />
      <button type="Submit">Search </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <h3>{message}</h3>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={55}
              animate="true"
            />
          </li>
          <li> Temperature: {weather.temperature}°C</li>
          <li> Humidity: {weather.humidity}%</li>
          <li> Wind: {weather.wind} m/h</li>
        </ul>
        <ul>
          <li className="days">Monday </li>
          <li className="days">Tuesday </li>
          <li className="days">Wednesday </li>
          <li className="days">Thursday </li>
          <li className="days">Friday </li>
        </ul>
        <div>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="goldenrod"
            size={50}
            animate="true"
          />
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={50}
            animate="true"
          />
          <ReactAnimatedWeather
            icon="RAIN"
            color="goldenrod"
            size={50}
            animate="true"
          />
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={50}
            animate="true"
          />
          <ReactAnimatedWeather
            icon="FOG"
            color="goldenrod"
            size={50}
            animate="true"
          />
        </div>
        <ul>
          <li className="Temp">22</li>
          <li className="Temp">24</li>
          <li className="Temp">21</li>
          <li className="Temp">27</li>
          <li className="Temp">30</li>
        </ul>
        <p> Open Source Code by Nicole Torres from SheCodes</p>
      </div>
    );
  } else {
    return form;
  }
}
