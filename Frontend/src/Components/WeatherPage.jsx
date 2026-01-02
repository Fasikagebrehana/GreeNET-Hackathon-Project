import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './WeatherPage.css';

const data = [
  { name: 'Mon', temperature: 22 },
  { name: 'Tue', temperature: 25 },
  { name: 'Wed', temperature: 27 },
  { name: 'Thu', temperature: 23 },
  { name: 'Fri', temperature: 26 },
  { name: 'Sat', temperature: 28 },
  { name: 'Sun', temperature: 30 },
];

const WeatherPage = () => {
  return (
    <div className="weather-container">
      <header className="weather-header">
        <h1>Weather</h1>
        <div className="weather-settings">
          <button className="settings-btn">Settings</button>
          <button className="filter-btn">Filter</button>
        </div>
      </header>

      <section className="weather-region">
        <h2>Region</h2>
        <div className="region-stats">
          <div className="stat">
            <p>Temperature</p>
            <span>37°C</span>
          </div>
          <div className="stat">
            <p>Humidity</p>
            <span>10%</span>
          </div>
          <div className="stat">
            <p>Precipitation</p>
            <span>5%</span>
          </div>
          <div className="stat">
            <p>Wind</p>
            <span>5 Km/hr</span>
          </div>
        </div>
      </section>

      <section className="weather-forecast">
        <h2>Forecast</h2>
        <div className="forecast-summary">
          <div className="forecast-day">Today</div>
          <div className="forecast-day">Thu</div>
          <div className="forecast-day">Fri</div>
          <div className="forecast-day">Sat</div>
          <div className="forecast-day">Sun</div>
        </div>
        <div className="forecast-chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="weather-insights">
        <h2>Weather Insights</h2>
        <div className="insights-content">
          <div className="insight">
            <p>Weather Alert</p>
          </div>
          <div className="insight">
            <p>Highest Demanding Crops</p>
          </div>
        </div>
      </section>

      <section className="weather-news">
        <h2>Weather News</h2>
        <div className="news-cards">
          <div className="news-card">
            <p>Farming Tip of the Day</p>
          </div>
          <div className="news-card">
            <p>Farming Tip of the Day</p>
          </div>
          <div className="news-card">
            <p>Farming Tip of the Day</p>
          </div>
          <div className="news-card">
            <p>Farming Tip of the Day</p>
          </div>
          <div className="news-card">
            <p>Farming Tip of the Day</p>
          </div>
          <div className="news-card">
            <p>Market prices of Agri-product</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherPage;
