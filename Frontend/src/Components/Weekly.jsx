import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import "./Weekly.css";
import imgg from "../assets/images/movie-card.png";
import imggs from "../assets/images/movie-card1.png";

const dataLineChart = [
  { name: "Mon", sales: 30 },
  { name: "Tue", sales: 45 },
  { name: "Wed", sales: 40 },
  { name: "Thu", sales: 50 },
  { name: "Fri", sales: 60 },
  { name: "Sat", sales: 70 },
  { name: "Sun", sales: 80 },
];

const dataBarChart = [
  { name: "C1", Maize: 4000, Wheat: 2400, Teff: 2400, Sorghum: 2000 },
  { name: "C2", Maize: 3000, Wheat: 1398, Teff: 2210, Sorghum: 3000 },
  { name: "C3", Maize: 2000, Wheat: 9800, Teff: 2290, Sorghum: 2780 },
  { name: "C4", Maize: 2780, Wheat: 3908, Teff: 2000, Sorghum: 1890 },
];

const Weekly = () => {
  return (
    <div className="dashboard">
      <div className="weekly-overview card">
        <div className="header">
          <h2>Weekly Overview</h2>
          <button className="weekly-btn">Weekly</button>
        </div>
        <p>
          This week's crop market prices show a mixed trend. Maize is selling at
          $2.50 per kilogram, reflecting a 5% increase from last week. Wheat
          prices have slightly declined by 2%, now at $3.10 per kilogram. Teff
          has experienced a 3% price increase, bringing it to $4.20 per
          kilogram.
        </p>
        {/* <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataLineChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div> */}
        <button className="view-details-btn">View Details</button>
      </div>

      <div className="demanding-crops card">
        <h2>Top 4 Highest Demanding Crops</h2>
        <div className="bar-chart">
          <ResponsiveContainer width="90%" height={300}>
            <BarChart data={dataBarChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Maize" fill="#29BB49" />
              <Bar dataKey="Wheat" fill="#FFBB28" />
              <Bar dataKey="Teff" fill="#8884D8" />
              <Bar dataKey="Sorghum" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="alerts card">
        <h2>Alert</h2>
        <div className="alert">
          <div className="icon price-icon"></div>
          <div>
            <p className="alert-title">Price Alert</p>
            <p>Wheat price has increased by 5%.</p>
          </div>
        </div>
        <div className="alert">
          <div className="icon weather-icon"></div>
          <div>
            <p className="alert-title">Weather Alert</p>
            <p>Heavy rain expected tomorrow.</p>
          </div>
        </div>
        <button className="view-alerts-btn">View All Alerts</button>
      </div>

      <div className="farming-tip card">
        <img src={imggs} alt="Farming" />
        <h2>Farming Tip of the Day</h2>
        <p>
          Learn new techniques and improve your farming skills with our tips.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>

      <div className="market-prices card">
        <img src={imgg} alt="Market" />
        <h2>Market prices of Agri-product</h2>
        <p>
          Learn new techniques and improve your farming skills with our tips.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default Weekly;
