import "./Detail.css";
import "bootstrap/dist/css/bootstrap.css";
const Detail = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="col-md-12 row">
      <div className="detailDiv col-md-2" id="day1">
        <p>Dag 1</p>
      </div>
      <div className="detailDiv col-md-2" id="day2">
        <p>Dag 2</p>
      </div>
      <div className="detailDiv col-md-2" id="day3">
        <p>Dag 3</p>
      </div>
      <div className="detailDiv col-md-2" id="day4">
        <p>Dag 4</p>
      </div>
      <div className="detailDiv col-md-2" id="day5">
        <p>Dag 5</p>
      </div>
    </div>
  );
};

export default Detail;
