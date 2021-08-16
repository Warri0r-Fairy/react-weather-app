import React from "react";
import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{props.info.city}</h1>
      <ul>
        <li>
          <DisplayDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-start">
              <WeatherIcon iconCode={props.info.icon} />
            </div>
            <span className="temp">{Math.round(props.info.temp)}</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}</li>
            <li>Wind: {Math.round(props.info.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
