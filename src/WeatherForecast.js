import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {

function handleResponse(response) {
  console.log(response.data)
}
  const apiKey = "fb2202991880ec9c8bd86bd6cf3cb526"
  let longitude = props.coordinates.lon
  let latitude = props.coordinates.lat
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  axios.get(apiURL).then(handleResponse)

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forcast-day">Thu</div>
          <WeatherIcon iconCode="01d" size={36}/>
          <div className="daily-temp">
          <span className="temp-max">19° </span>
          <span className="temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
