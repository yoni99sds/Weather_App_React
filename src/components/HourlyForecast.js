import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherIcon } from '@fortawesome/react-fontawesome';
const HourlyForecast = ({ forecastData }) => {
    if (!forecastData) {
      return <div className="text-center text-gray-600">No hourly forecast data available.</div>;
    }
  
    if (!forecastData.list) {
      return <div className="text-center text-gray-600">No hourly forecast data available.</div>;
    }
  
    const hourlyData = forecastData.list.slice(0, 12); // Get the first 12 hours of forecast data
    
     
    
    return (
      <div className="flex items-center justify-center mt-8">
        {hourlyData.map((hour) => (
          <div key={hour.dt} className="text-center mx-4">
            <p className="text-gray-600">{hour.dt_txt}</p>
            <FontAwesomeIcon icon={getWeatherIcon(hour.weather[0].icon)} className="text-4xl text-gray-600 mt-2" />
            <p className="text-gray-600">{Math.round(hour.main.temp)}°C</p>
          </div>
        ))}
      </div>
    );
  };
  



export default HourlyForecast;
