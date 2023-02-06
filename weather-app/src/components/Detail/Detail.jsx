import "./Detail.css";
import "bootstrap/dist/css/bootstrap.css";
const Detail = ({ weatherData }) => {
  let list;
  if (!weatherData) {
    return;
  } else {
    list = weatherData.forecast.forecastday.map((element, index) => {
      return (
        <>
          <div className="detailDiv col-md-2">
            <h2 className="name">{element.date}</h2>
            <img className="circle-img" src={element.day.condition.icon}></img>
            <p>Max temperatur: {element.day.maxtemp_c} ºC</p>
            <p>Min temperatur: {element.day.mintemp_c} ºC</p>
          </div>
        </>
      );
    });
  }

  return <div className="col-md-12 row">{list}</div>;
};

export default Detail;
