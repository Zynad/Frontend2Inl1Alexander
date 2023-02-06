import Detail from "../components/Detail/Detail";
import Start from "../components/Start/Start";

const PresentationContainer = ({ weatherData }) => {
  return (
    <>
      <Start weatherData={weatherData} />
      <Detail weatherData={weatherData} />
    </>
  );
};

export default PresentationContainer;
