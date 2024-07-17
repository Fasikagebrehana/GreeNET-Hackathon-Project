import React from 'react';
import './overview.css';
import MarketStatus from './MarketStatus';
import CropList from './CropList';
import InteractiveMap from './InteractiveMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCloud, faL, faSun, faTemperatureHigh, faTint } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faUps } from '@fortawesome/free-brands-svg-icons';

function Overview() {
  return (
    <div className="overview">
      <div className="overview-cards">
        <div className="overview-card">
          <h3>Temperature</h3>
          <div className="change-indicator up"><FontAwesomeIcon icon={faArrowUp}/> 5%</div>
          <div className="circular-progress-wrapper">
            <CircularProgressbar 
              value={37} 
              text={`${37}°C`} 
              styles={buildStyles({
                pathColor: '#fff',
                textColor: '#000',
                trailColor: '#32b871',
              })}
            />
          </div>
          <FontAwesomeIcon icon={faTemperatureHigh} className="weather-icon"/>
        </div>
        <div className="overview-card">
          <h3>Humidity</h3>
          <div className="change-indicator down"><FontAwesomeIcon icon={faArrowDown}/> 5%</div>
          <div className="circular-progress-wrapper">
            <CircularProgressbar 
              value={10} 
              text={`${10}%`} 
              styles={buildStyles({
                pathColor: '#fff',
                textColor: '#000',
                trailColor: '#32b871',
              })}
            />
          </div>
          <FontAwesomeIcon icon={faTint} className="weather-icon"/>
        </div>
        <div className="overview-card">
          <h3>Precipitation</h3>
          <div className="change-indicator up"><FontAwesomeIcon icon={faArrowUp}/> 15%</div>
          <div className="circular-progress-wrapper">
            <CircularProgressbar 
              value={5} 
              text={`${5}%`} 
              styles={buildStyles({
                pathColor: '#fff',
                textColor: '#000',
                trailColor: '#32b871',
              })}
            />
          </div>
          <FontAwesomeIcon icon={faCloud} className="weather-icon"/>
        </div>
      </div>
      <MarketStatus />
      <CropList />
      <InteractiveMap />
    </div>
  );
}

export default Overview;
