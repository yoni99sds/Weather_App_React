import axios from 'axios';

const API_KEY = '06d84e72e3bcfb924f9c0960f08cb4b5';

export const getCurrentweather = async (latitude, longitude) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch current weather');
  }
};

export const getWeeklyForecast = async (latitude, longitude) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weekly forecast');
  }
};
