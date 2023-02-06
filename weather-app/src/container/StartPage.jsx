import PresentationContainer from "./PresentationContainer";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";
import GetApi from "../services/GetApi";

const StartPage = () => {
  const [weatherHasLoaded, setWeatherHasLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [url, setUrl] = useState(
    "http://api.weatherapi.com/v1/forecast.json?key=39005e92fe5f46f4ab5202416230602&q=Stockholm&days=5&aqi=no&alerts=no"
  );

  const SearchClick = (searchText) => {
    if (searchText != "") {
      setUrl(
        "http://api.weatherapi.com/v1/forecast.json?key=39005e92fe5f46f4ab5202416230602&q=" +
          searchText +
          "&days=5&aqi=no&alerts=no"
      );
    }
  };
  useEffect(() => {
    const GetIncWeather = async () => {
      let incWeather = await GetApi(url);
      setWeatherData(incWeather);
      setWeatherHasLoaded(true);
    };

    GetIncWeather();
  }, []);

  return (
    <>
      <Header />
      <Search searchClick={SearchClick} />
      {weatherHasLoaded && <PresentationContainer weatherData={weatherData} />}
      <Footer />
    </>
  );
};

export default StartPage;
