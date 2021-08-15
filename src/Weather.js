import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import DisplayDate from "./DisplayDate";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000)
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1 className="text-capitalize">{weatherInfo.city}</h1>
        <ul>
          <li>
            <DisplayDate date={weatherInfo.date} />
          </li>
          <li className="text-capitalize">{weatherInfo.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherInfo.IconUrl}
                alt={weatherInfo.description}
                className="float-start"
              />
              <span className="temp">{Math.round(weatherInfo.temp)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherInfo.humidity}</li>
              <li>Wind: {Math.round(weatherInfo.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fb2202991880ec9c8bd86bd6cf3cb526";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
