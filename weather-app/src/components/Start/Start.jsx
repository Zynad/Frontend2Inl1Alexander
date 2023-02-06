import { useState } from "react";
import "./Start.css";

const Start = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  } else {
    return (
      <div id="start-div">
        <h4>{weatherData.location.name}</h4>
        <p>{weatherData.location.country}</p>
        <p>Datum : {weatherData.location.localtime.substring(0, 10)}</p>
        <p>
          Tid i {weatherData.location.name} just nu :{" "}
          {weatherData.location.localtime.substring(11, 16)}
        </p>
        <p>Temperatur : {weatherData.current.temp_c} ºC</p>
        <img src={weatherData.forecast.forecastday[0].day.condition.icon}></img>
      </div>
    );
  }
};

export default Start;
