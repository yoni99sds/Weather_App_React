import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import './styles/styles.css';
import backgroundImage from './img/pexels-pixabay-53594.jpg';
import Footer from './components/footer';
import Header from './components/header';
import AboutPage from './components/AboutPage';
import Home from './components/Home';
import { CircularProgress } from '@mui/material';
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
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <CircularProgress color="secondary" size={60} />
          <div className="mt-4">Loading Please Wait...</div>
        </div>
      </div>
    );
  }

  const { latitude, longitude } = location;

  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Search onSearch={handleSearch} />
                  <Home latitude={latitude} longitude={longitude} searchedLocation={searchedLocation} />
                </div>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <div className="max-w-8xl mx-auto px-10">
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
