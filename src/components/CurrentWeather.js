import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTint, faCloud } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/react';

const CurrentWeather = ({ latitude, longitude, searchQuery }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '06d84e72e3bcfb924f9c0960f08cb4b5';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

        if (searchQuery) {
          apiUrl += `&q=${searchQuery}`;
        } else {
          apiUrl += `&lat=${latitude}&lon=${longitude}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching current weather:', error);
        // Handle error if weather data retrieval fails
      }
    };

    fetchWeatherData();
  }, [latitude, longitude, searchQuery]);

  if (!weatherData) {
    return <div>Loading current weather...</div>;
  }

  const { name, main, weather } = weatherData;
  const temperatureInCelsius = Math.round(main.temp - 273.15);

  // Animation keyframes for icon rotation
  const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <Box
      maxWidth="xl"
      mx="auto"
      bgcolor="rgba(0, 0, 0, 0.5)"
      borderRadius="20px"
      width="81%"
      border="1px solid transparent"
      bordershadow="10px"
      
      p={1}
      
    >
      <Typography
      fontFamily="Tahoma, san-serif"
      variant="h4" align="center" fontWeight="bold" color="white" mb={3}>
        Current Weather in {name}
      </Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" gap={4}>
        <Box
          maxWidth="xl"
          mx="auto"
          bgcolor="rgba(0, 0, 0, 0.6)"
          borderRadius="15px"
          border="1px solid transparent"
          bordershadow="10px"
          
          px={4}
          py={2}
          display="flex"
          alignItems="center"
          fontFamily="Lucida Bright, sans-serif"
        >
          <FontAwesomeIcon
            icon={faTemperatureHigh}
            className="text-3xl text-red-700 mr-2"
            animation={`${rotateAnimation} 2s infinite linear`}
          />
          <Typography variant="body1" color="white">Temp:</Typography>
          <Typography variant="body1" color="white">{temperatureInCelsius}°C</Typography>
        </Box>
        <Box
          maxWidth="xl"
          mx="auto"
          bgcolor="rgba(0, 0, 0, 0.5)"
          borderRadius="15px"
          border="1px solid transparent"
          bordershadow="10px"
          px={4}
          py={2}
          display="flex"
          alignItems="center"
          fontFamily="Lucida Bright, sans-serif"
  
        >
          <FontAwesomeIcon
            icon={faTint}
            className="text-2xl text-blue-700 mr-2"
            animation={`${rotateAnimation} 2s infinite linear`}
          />
          <Typography variant="body1" color="white">Humidity:</Typography>
          <Typography variant="body1" color="white">{main.humidity}%</Typography>
        </Box>
        <Box
          maxWidth="xl"
          mx="auto"
          bgcolor="rgba(0, 0, 0, 0.5)"
          borderRadius="20px"
          border="1px solid transparent"
          bordershadow="10px"
          
          px={4}
          py={2}
          display="flex"
          alignItems="center"
          fontFamily="Lucida Bright, sans-serif"
        >
          <FontAwesomeIcon
            icon={faCloud}
            className="text-xl text-yellow-400 mr-2"
            animation={`${rotateAnimation} 2s infinite linear`}
          />
          <Typography variant="body1" color="white">Weather:</Typography>
          <Typography variant="body1" color="white">{weather[0].description}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
