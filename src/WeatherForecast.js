import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setloaded] = useState(false)
  const [forecast, setForcast] = useState(null)

  function handleResponse(response) {
    setForcast(response.data.daily)
    setloaded(true)
  }

  useEffect(() => {
    setloaded(false);
  }, [props.coordinates])


  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 6) {
            return (
              <div className="col" key="index">
            <WeatherForecastDay forecast={dailyForecast}/>
          </div>
            )} else {
              return null
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "fb2202991880ec9c8bd86bd6cf3cb526"
    let longitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse)

    return null
  }
}
