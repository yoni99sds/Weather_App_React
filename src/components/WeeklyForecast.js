import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCloud, faSun, faTemperatureHigh, faTemperatureLow, faCloudSun, faCloudRain, faBolt } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

const WeeklyForecast = ({ latitude, longitude, searchQuery }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const apiKey = '06d84e72e3bcfb924f9c0960f08cb4b5';
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;

        if (searchQuery) {
          apiUrl += `&q=${searchQuery}`;
        } else {
          apiUrl += `&lat=${latitude}&lon=${longitude}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        setForecastData(data);
      } catch (error) {
        console.error('Error fetching weekly forecast:', error);
        // Handle error if forecast data retrieval fails
      }
    };

    fetchForecastData();
  }, [latitude, longitude, searchQuery]);

  if (!forecastData) {
    return <div className="text-center text-gray-600">Loading weekly forecast...</div>;
  }

  const { list } = forecastData;

  if (!list) {
    return <div className="text-center text-gray-600">No forecast data available.</div>;
  }

  // Get the next 7 days
  const today = new Date();
  const nextSevenDays = [...Array(9)].map((_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });
  
  // Filter the forecast data for the next 7 days
  const filteredData = [];
  nextSevenDays.forEach((day) => {
    const forecastForDay = list.filter((item) => {
      const forecastDate = new Date(item.dt_txt);
      const forecastDay = forecastDate.getDate();
      return day.getDate() === forecastDay;
    });
  
    if (forecastForDay.length > 0) {
      filteredData.push(forecastForDay);
    }
  });
  

  // Function to get the appropriate weather icon based on weather condition
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return faSun;
      case 'Clouds':
        return faCloudSun;
      case 'Rain':
        return faCloudRain;
      case 'Thunderstorm':
        return faBolt;
      default:
        return faCloud;
    }
  };

  // ...
return (
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-13 lg:grid-cols-1 gap-4 mt-20">
  <div className="max-w-10xl mx-auto bg-gray-900 bg-opacity-30 rounded-lg p-20 ">
    <h2 className="text-5xl text-white font-semibold mb-12 ">Weekly Forecast</h2>
    <div className="flex flex-wrap gap-7">
      {filteredData.map((dayData, index) => {
        const day = nextSevenDays[index];
        const dayName = day.toLocaleDateString(undefined, { weekday: 'long' });

        // Get the highest and lowest temperatures for the day
        const temperatures = dayData.map((item) => item.main.temp);
        const validTemperatures = temperatures.filter((temp) => Number.isFinite(temp));
        const maxTemperature = Math.round(Math.max(...validTemperatures)) - 273;
        const minTemperature = Math.round(Math.min(...validTemperatures)) - 273;

        // Get the average humidity for the day
        const humidities = dayData.map((item) => item.main.humidity);
        const validHumidities = humidities.filter((humidity) => Number.isFinite(humidity));
        const avgHumidity = Math.round(
          validHumidities.reduce((sum, humidity) => sum + humidity, 0) / validHumidities.length
        );

        return (
          <div key={day.getTime()} className="  lg:w-1/4 xl:w-1/4 mb-2">
            <div className="max-w-xl mx- auto bg-black bg-opacity-50 rounded-lg p-7">
              <p className="text-lg text-white font-semibold mb-2">{dayName}</p>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faTemperatureHigh} className="mr-2 text-red-700" />
                <p className="text-lg text-white">Highest: {maxTemperature}°C</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faTemperatureLow} className="mr-2 text-blue-700" />
                <p className="text-lg text-white">Lowest: {minTemperature}°C</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faTint} className="mr-2 text-white" />
                <p className="text-lg text-white">Humidity: {avgHumidity}%</p>
                
              </div>
              <div className="flex ">
                <FontAwesomeIcon icon={getWeatherIcon(dayData[0].weather[0].main)} className="mr-2 text-yellow-400" />
                <p className="text-lg text-white">Weather: {dayData[0].weather[0].main} </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  </div>
);
// ...
};

export default WeeklyForecast;
