import Start from "../components/Start/Start";
import Detail from "../components/Detail/Detail";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import GetApi from "../services/GetApi";

const StartPage = () => {
  const [weatherHasLoaded, setWeatherHasLoaded] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [url, setUrl] = useState(
    "http://api.weatherapi.com/v1/forecast.json?key=39005e92fe5f46f4ab5202416230602&q=Stockholm&days=5&aqi=no&alerts=no"
  );

  const SearchClick = (searchText) => {
    console.log(searchText);
    setWeatherHasLoaded(true);
    if (searchText !== "") {
      setUrl(
        "http://api.weatherapi.com/v1/forecast.json?key=39005e92fe5f46f4ab5202416230602&q=" +
          searchText +
          "&days=5&aqi=no&alerts=no"
      );
    }
  };

  {
    setInterval(setWeatherHasLoaded, 1);
  }

  return (
    <>
      {weatherHasLoaded ? (
        <GetApi
          url={url}
          weatherData={setWeatherData}
          errorMessage={setErrorMessage}
        />
      ) : (
        ""
      )}
      <Header />
      <Search searchClick={SearchClick} />
      <Start weatherData={weatherData} />
      <Detail weatherData={weatherData} />
      <Footer />
    </>
  );
};

export default StartPage;
