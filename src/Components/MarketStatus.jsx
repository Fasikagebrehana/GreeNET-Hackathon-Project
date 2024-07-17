import React from 'react';
import './MarketStatus.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 100 },
  { name: 'Tue', value: 120 },
  { name: 'Wed', value: 200 },
  { name: 'Thu', value: 150 },
  { name: 'Fri', value: 230 },
  { name: 'Sat', value: 280 }
];

const MarketStatus = () => {
  return (
    <div className="market-status">
      <div className="header">
        <h3>Market Status</h3>
        <button className="weekly-btn">Weekly</button>
      </div>
      <p className="subtext">Your sales performance is 30% better compare to last month</p>
      <div className="status-content">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#32b871" strokeWidth={2} dot={{ stroke: '#32b871', strokeWidth: 2, r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="price-tag">
          <p>$296.73 pKg</p>
          <span>Sat, Jun 22nd</span>
        </div>
      </div>
      <button className="view-details-btn">View Details</button>
    </div>
  );
};

export default MarketStatus;
