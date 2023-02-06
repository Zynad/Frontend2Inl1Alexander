import { useState } from "react";
import "./Start.css";

const Start = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div id="start-div">
      <h4>Stad = Stockholm</h4>
      <p>Land = Sverige</p>
    </div>
  );
};

export default Start;
