import Detail from "../components/Detail/Detail";
import Start from "../components/Start/Start";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useRef, useState } from "react";
import GetApi from "../services/GetApi";

const PresentationContainer = () => {
  const searchRef = useRef();
  const [weatherData, setWeatherData] = useState();
  const [url, setUrl] = useState(
    "https://api.weatherapi.com/v1/forecast.json?key=e0378a759e45453390c143311231801&q=sweden&days=5&aqi=no&alerts=no)"
  );
  const [searchBool, setSearchBool] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const SearchClick = () => {};
  return (
    <>
      {searchBool ? (
        <GetApi
          url={url}
          weatherData={setWeatherData}
          errorMessage={setErrorMessage}
        />
      ) : (
        ""
      )}
      <Header />
      <div className="search-area">
        <input type="text" placeholder="Sök på stad" ref={searchRef} />
        <button id="search-button" onClick={SearchClick}>
          Sök
        </button>
      </div>
      <Start />
      <Detail />
      <Footer />
    </>
  );
};

export default PresentationContainer;
