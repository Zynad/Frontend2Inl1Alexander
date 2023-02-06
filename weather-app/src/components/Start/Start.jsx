import { useState } from "react";
import "./Start.css";

const Start = () => {
  const [location, setLocation] = useState("Stockholm");
  return (
    <div id="start-div">
      <h4>Stad = {location}</h4>
    </div>
  );
};

export default Start;
