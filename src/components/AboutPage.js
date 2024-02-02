import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerFull, faWind, faSun, faCloudRain, faThermometerEmpty } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/AboutPage.css'; // Import the CSS file for styling
import Search from './Search';

const AboutPage = () => {
    const [ setSearchedLocation] = useState(null);
    const handleSearch = (searchQuery) => {
        setSearchedLocation(searchQuery);
      };
    
  return (
    <div className="out-container">
      <div className="about-container px-5">
      <div className="search-inner">
          <Search onSearch={handleSearch} />
          </div>
        <div className="top-content">
          <h2>London, UK</h2>
          <p>Tuesday 20 June</p>
       
        </div>

        <div className="sub-container mr-10 py-5">
          <div className="content1 px-5 gap-20">
            <FontAwesomeIcon icon={faCloudSun} color="yellow" size="7x" />
            <div className="weather-info">
              <h2 className="py-7">21°C</h2>
              <div className="weather-description">Mostly Sunny</div>
            </div>
          </div>
          <hr className="divider" />
          <div className="container">
            <div className="row row1">
              <div className="content">
                <FontAwesomeIcon icon={faThermometerFull} className="icon" />
                <div className="temperature">23°C</div>
                <div className="label">High</div>
              </div>

              <div className="content">
                <FontAwesomeIcon icon={faWind} className="icon" />
                <div className="wind">7 mph</div>
                <div className="label">Wind</div>
              </div>

              <div className="content">
                <FontAwesomeIcon icon={faSun} className="icon" />
                <div className="sunrise">5:57</div>
                <div className="label">Sunrise</div>
              </div>
            </div>

            <div className="row row2">
              <div className="content">
                <FontAwesomeIcon icon={faThermometerEmpty} className="icon" />
                <div className="temperature">18°C</div>
                <div className="label">Low</div>
              </div>

              <div className="content">
                <FontAwesomeIcon icon={faCloudRain} className="icon" />
                <div className="rain">0%</div>
                <div className="label">Rain</div>
              </div>

              <div className="content">
                <FontAwesomeIcon icon={faSun} className="icon" />
                <div className="sunset">6:35</div>
                <div className="label">Sunset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default AboutPage;
