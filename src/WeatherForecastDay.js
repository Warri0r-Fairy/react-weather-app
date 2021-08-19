import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let maxTemp = Math.round(props.forecast.temp.max)
        return `${maxTemp}°`
    }

    function minTemp() {
        let minTemp = Math.round(props.forecast.temp.min)
        return `${minTemp}°`
    }

    function day() {
        let date = new Date(props.forecast.dt * 1000)
        let day = date.getDay()
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ];

        return days[day]
    }
    return (
        <div className="WeatherForecastDay">
    <div className="forcast-day">{day()}</div>
        <WeatherIcon iconCode={props.forecast.weather[0].icon} size={36}/>
        <div className="daily-temp">
            <span className="temp-max">{maxTemp()} </span>
            <span className="temp-min">{minTemp()}</span>
        </div>
    </div>
    )
}