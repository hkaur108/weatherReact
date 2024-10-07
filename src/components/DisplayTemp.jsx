import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function DisplayTemp(props) {
  const {weather} = props;
  const {setcity}= props;
  const {setweather}= props;
  
  const handleRefresh=()=>{
    setcity("")
    setweather("")


  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
                  <h4 className='text-center'>{weather.data.name}, {weather.data.sys.country}</h4>
                  <p className='fs-5 text-secondary'>🥵 Max Temp: {weather.data.main.temp_max} F, 🥶 Min Temp: {weather.data.main.temp_min} F</p>
                  <p className='fs-5 text-secondary'>🍃 Wind Speed: {weather.data.wind.speed} kmph, 💧Humidity: {weather.data.main.humidity}%</p>
                  <p className='text-capitalize fs-5 text-secondary'>{weather.data.weather[0].description}</p>
                  <button onClick={handleRefresh} className='btn-sm btn btn-secondary'>Refresh</button>
          </div>
        </div>
      </div>
    </div>
  )
}
