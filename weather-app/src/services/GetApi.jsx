import { useEffect } from "react";

const Api = ({ url, weatherData, errorMessage }) => {
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((actualData) => {
        weatherData(actualData);
        errorMessage("");
      })
      .catch((err) => {
        errorMessage("Sökningen gav tyvärr ingen träff...");
      });
  }, []);
};

export default Api;
