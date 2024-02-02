import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeeklyForecast from './WeeklyForecast';
const Home = ({ latitude, longitude, searchedLocation, onSearch }) => {
    return (
      <div>
      <div className=" py-8">

        <CurrentWeather
          latitude={searchedLocation ? null : latitude}
          longitude={searchedLocation ? null : longitude}
          searchQuery={searchedLocation}
        />
      </div>
      <div className="mt-8">
        <WeeklyForecast
          latitude={searchedLocation ? null : latitude}
          longitude={searchedLocation ? null : longitude}
          searchQuery={searchedLocation}
        />
      </div>
      </div>

  );
};

export default Home;
