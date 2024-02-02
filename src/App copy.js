import React, { useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecast from './components/WeeklyForecast';
import Search from './components/Search';
import './styles/styles.css';
import backgroundImage from './img/pexels-pixabay-53594.jpg';
import Footer from './components/footer';
import Header from './components/header';




const App = () => {
  const [location, setLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState(null);

  useEffect(() => {
    // Fetch the user's current location using Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting location:', error);
        // Handle error if location retrieval fails
      }
    );
  }, []);

  const handleSearch = (searchQuery) => {
    setSearchedLocation(searchQuery);
  };

  if (!location) {
    // Render loading or fallback UI while location is being fetched
    return <div>Loading...</div>;
  }

  const { latitude, longitude } = location;

  return (
    <div
      className="min-h-screen py-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto py-20">
        <div>
<Header/>
</div>
        <Search onSearch={handleSearch} />
        <div className="py-8">
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
        <div className="max-w-8xl mx-auto px-10">
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
